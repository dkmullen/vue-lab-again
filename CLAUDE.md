# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm install       # install dependencies
npm run dev       # start Vite dev server with HMR
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # run oxlint --fix, then eslint --fix --cache
npm run format    # run oxfmt over src/
```

There is no test suite/framework configured in this project.

Linting uses two tools together: `oxlint` (fast, primary correctness checks, config in `.oxlintrc.json`) and `eslint` (Vue-specific rules via `eslint-plugin-vue`, config in `eslint.config.js`). `eslint-plugin-oxlint` disables ESLint rules that oxlint already covers, so the two don't conflict. Formatting is done by `oxfmt` (not Prettier), configured via `.oxfmtrc.json` (no semicolons, single quotes); `eslint-config-prettier` is used only to turn off ESLint's own formatting rules.

## Architecture

This is a small Vue 3 + Vite SPA scaffolded from the standard `create-vue` template and built out with Vuetify. Plain JavaScript (no TypeScript) — path aliasing for editor/IDE support is declared in `jsconfig.json`, `@` maps to `src/`.

### App bootstrap

`src/main.js` wires up the app in this order: create app → `pinia` → `router` → global base components (`globals.js`) → `registerPlugins` (`src/plugins/index.js`, currently just Vuetify) → mount.

### Global base component auto-registration

`src/globals.js` glob-imports every `.vue` file in `src/components/base-components/` and registers each as a global component, converting the filename to PascalCase (so `base-button.vue` or `BaseButton.vue` both become `<BaseButton>`). Any new file dropped into `base-components/` is automatically available app-wide without an explicit import — this is the intended way to add new shared form primitives.

### Vuetify icon system

Vuetify's icon font is *not* used. `src/icons.js` hand-imports individual MDI path constants from `@mdi/js` (for tree-shaking) into an `icons` map keyed by `mdi-*` string names. `src/plugins/vuetify.js` wires this map into Vuetify's icon system via a custom SVG-rendering component. **To use a new MDI icon**, it must first be imported and added to the `icons` map in `src/icons.js` — icons are not available just by referencing an `mdi-*` name in a template.

Vuetify light/dark theme color tokens are also defined in `src/plugins/vuetify.js`. Theme is toggled and persisted to `localStorage` (`'theme'` key) by `NavBar.vue`; default theme is `dark`.

### Data-driven form pattern

The central reusable abstraction is `EntityForm.vue`, driven by a `formModel` prop: an array of field descriptors, e.g.:

```js
{ id: 'email', label: 'Email', type: 'email', required: true, cols: 6, items: [...] }
```

- `id` becomes the key in the reactive `values` object emitted on `submit`.
- `type` selects which base field component renders (`textarea` → `BaseTextArea`, `select` → `BaseSelect`, anything else → `BaseInput`), and also selects which validation rule set applies (see below).
- `cols` controls the field's `v-col` width (defaults to 6 of 12).
- `items` is passed through for `select` fields.

Field components live in `src/components/base-components/` (`BaseInput`, `BaseSelect`, `BaseTextArea`, `BaseButton`) and share two small modules:
- `shared-props.js` — common Vuetify field defaults (`variant: 'outlined'`, `density: 'comfortable'`, a shared CSS class, default `required`).
- `validation.js` — a `validationRules` map keyed by field `type`/name (`email`, `ssn`, `zip`, `phone`, `fname`, `lname`, `address`, `city`, etc.) plus a generic `requiredRule`. `BaseInput` looks up `validationRules[props.type]` automatically and prepends the required rule when the field is required.

Masked inputs (SSN, phone, zip, long dates) are handled in `BaseInput.vue` via `maska`'s `v-maska` directive, driven by an internal `typeConfig` map of hint text + mask pattern per `type`.

When adding a new field type, it typically needs entries in three places: `EntityForm.vue`'s `v-if` chain (to pick the component), `validation.js` (if it needs its own rules), and possibly `BaseInput.vue`'s `typeConfig` (if it needs a mask/hint).

### Routing / views

Routes are defined in `src/router/index.js` with lazy-loaded view components from `src/views/`. Views are thin — they define a `formModel` and render `<EntityForm>` (see `HomeView.vue`, `PageTwo.vue`).
