import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import i18n from "../i18n";
import Main from "../views/Main.vue";

const routes = [
  {
    path: "/:locale",
    name: "Main",
    components: {
      default: Main,
    },
    beforeEnter: (to, from, next) => {
      const locale = to.params.locale;
      const supported_locales =
      import.meta.env.VITE_APP_I18N_SUPPORTED_LOCALE.split(",");
      if (!supported_locales.includes(locale)) return next("ua");
      if (i18n.locale !== locale) {
        i18n.locale = locale;
      }
      return next();
    },
  },
  {
    path: "/:locale/home",
    name: "EditProfile",
    components: {
      default: Home,
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
  },
  // {
  //   path: "/:locale/:catchAll(.*)",
  //   redirect() {
  //     return import.meta.env.VITE_APP_I18N_LOCALE;
  //   },
  // },
  // {
  //   path: "/:catchAll(.*)",
  //   redirect() {
  //     return import.meta.env.VITE_APP_I18N_LOCALE;
  //   },
  // },
];

const router = createRouter({
  history: createWebHistory(),
  base: import.meta.env.BASE_URL,
  routes,
});

export default router;
