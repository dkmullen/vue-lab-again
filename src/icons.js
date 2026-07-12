// src/icons.js
// Import only the icons you need from @mdi/js for tree-shaking
import {
  mdiMenuDown,
  mdiCheckboxMarked,
  mdiCheckboxBlankOutline,
  mdiMinusBox,
  mdiRadioboxMarked,
  mdiRadioboxBlank,
  /* the icons above are at least some of the ones needed by Vuetify for checkboxes,
  radios, dropdowns, etc. */
  mdiContentSave,
  mdiStopCircle,
  // Add more icons here as needed
} from "@mdi/js";

// Map icon names to their imported SVG paths
export const icons = {
  "mdi-menu-down": mdiMenuDown,
  "mdi-checkbox-marked": mdiCheckboxMarked,
  "mdi-checkbox-blank-outline": mdiCheckboxBlankOutline,
  "mdi-minus-box": mdiMinusBox,
  "mdi-content-save": mdiContentSave,
  "mdi-radiobox-marked": mdiRadioboxMarked,
  "mdi-radiobox-blank": mdiRadioboxBlank,
  "mdi-stop-circle": mdiStopCircle,
  // Add more icons here as needed
};
