/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins

import "@/assets/main.css";
import vuetify from "./vuetify";

export function registerPlugins(app) {
  app.use(vuetify);
}
