/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { h } from "vue";

// Icons
import { icons } from "@/icons";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    sets: {
      mdi: {
        component: (props) => {
          const icon = icons[props.icon];
          if (!icon) return null;
          return h(
            "svg",
            {
              ...props,
              viewBox: "0 0 24 24",
              fill: "currentColor",
              xmlns: "http://www.w3.org/2000/svg",
            },
            [h("path", { d: icon })],
          );
        },
      },
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          background: "#e9eff1",
          surface: "#f5fafc",
          "surface-dim": "#d5dbdd",
          "surface-bright": "#f5fafc",
          "on-surface": "#171d1e",
          outline: "#6c797c",
          "outline-variant": "#bbc9cc",
          primary: "#006876",
          "on-primary": "#ffffff",
          secondary: "#006b5e",
          "on-secondary": "#ffffff",
          tertiary: "#006493",
          "on-tertiary": "#ffffff",
          error: "#ba1a1a",
          "on-error": "#ffffff",
          "surface-light": "#e3e9eb",
        },
        dark: false,
        variables: {
          "overlay-background": "#111d20",
        },
      },
      dark: {
        colors: {
          background: "#1b2122",
          surface: "#0e1416",
          "surface-dim": "#0e1416",
          "surface-bright": "#343a3c",
          "on-surface": "#dee3e5",
          outline: "#869396",
          "outline-variant": "#3c494c",
          primary: "#44d8f1",
          "on-primary": "#00363e",
          secondary: "#72d8c5",
          "on-secondary": "#003730",
          tertiary: "#8ccdff",
          "on-tertiary": "#00344e",
          error: "#ffb4ab",
          "on-error": "#690005",
          "surface-light": "#343a3c",
        },
        dark: true,
        variables: {
          "overlay-background": "#111d20",
        },
      },
    },
    defaultTheme: "dark",
  },
});
