import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import VueAxios from "vue-axios";
import axios from "axios";
import i18n from "./i18n";
import { createPinia } from 'pinia'
/*Style */
import "./assets/css/global.scss";
/*Import components */
import image from "./assets/assetsImport";
import components from "./import";
/*Import components */
/*Directives */
import directives from "./directives/index";
/*Directives */
const app = createApp(App);
const pinia = createPinia();

directives.forEach((directive) => {
    app.directive(directive.name, directive);
});

for (let index = 0; index < Object.keys(components).length; index++) {
    const element = Object.keys(components)[index];
    app.component(element, components[element])
}

for (let index = 0; index < Object.keys(image).length; index++) {
    const element = Object.keys(image)[index];
    app.component(element, image[element])
}

app
    .use(router)
    .use(pinia)
    .use(i18n)
    .use(VueAxios, axios)
    .mount('#app')