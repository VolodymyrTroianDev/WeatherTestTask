import { createI18n } from "vue-i18n";
import en from "./localization/en.json";
import uk from "./localization/uk.json";

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
  fallbackLocale: "en",
  availableLocales: ["en", "uk"],
  messages: {
    en,
    uk
  }
});