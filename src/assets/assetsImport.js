import { defineAsyncComponent } from "vue";
const uaImg = defineAsyncComponent(() => import("./image/ua-img.vue"));
const ukImg = defineAsyncComponent(() => import("./image/uk-img.vue"));


export default {
    uaImg,
    ukImg
}