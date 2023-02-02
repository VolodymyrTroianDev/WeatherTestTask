import { createI18n } from "vue-i18n";
import en from "./localization/en.json";
import ua from "./localization/ua.json";

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
  fallbackLocale: "en",
  availableLocales: ["en", "ua"],
  messages: {
    en,
    ua
  }
});