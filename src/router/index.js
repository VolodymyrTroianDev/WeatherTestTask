import { createRouter, createWebHistory } from "vue-router";
import i18n from "../i18n";
import Favorites from "../views/Favorites.vue";
import Main from "../views/Main.vue";
import Header from "../components/Header.vue";

const routes = [
  {
    path: "/:locale",
    name: "main",
    components: {
      Header,
      default: Main,
    },
    beforeEnter: (to, from, next) => {
      const locale = to.params.locale;
      const supported_locales =
        import.meta.env.VITE_APP_I18N_SUPPORTED_LOCALE.split(",");
      if (!supported_locales.includes(locale)) return next("uk");
      if (i18n.locale !== locale) {
        i18n.locale = locale;
      }
      return next();
    },
  },
  {
    path: "/:locale/favorites",
    name: "favorites",
    components: {
      Header,
      default: Favorites,
    },
  },
  {
    path: "/:locale/:catchAll(.*)",
    redirect() {
      return import.meta.env.VITE_APP_I18N_LOCALE;
    },
  },
  {
    path: "/:catchAll(.*)*",
    redirect() {
      return import.meta.env.VITE_APP_I18N_LOCALE;
    },
  }
];

const router = createRouter({
  history: createWebHistory(),
  base: import.meta.env.BASE_URL,
  routes,
});

export default router;
