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
  mdiSend,
  mdiWhiteBalanceSunny,
  mdiWeatherNight,
  mdiDelete,
  mdiPencil,
  mdiEye,
  mdiBook,
  mdiPlus,
  mdiChevronRight,
  mdiChevronLeft,
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
  "mdi-send": mdiSend,
  "mdi-white-balance-sunny": mdiWhiteBalanceSunny,
  "mdi-weather-night": mdiWeatherNight,
  "mdi-delete": mdiDelete,
  "mdi-pencil": mdiPencil,
  "mdi-eye": mdiEye,
  "mdi-book": mdiBook,
  "mdi-plus": mdiPlus,
  "mdi-chevron-right": mdiChevronRight,
  "mdi-chevron-left": mdiChevronLeft,
};
