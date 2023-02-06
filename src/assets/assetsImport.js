import { defineAsyncComponent } from "vue";
const uaImg = defineAsyncComponent(() => import("./image/ua-img.vue"));
const ukImg = defineAsyncComponent(() => import("./image/uk-img.vue"));
const starImg = defineAsyncComponent(() => import("./image/star.vue"));
const AddCard = defineAsyncComponent(() => import("./image/add-card-img.vue"));
const closeBtn = defineAsyncComponent(() => import("./image/close-img.vue"));


export default {
    uaImg,
    ukImg,
    starImg,
    AddCard,
    closeBtn
}