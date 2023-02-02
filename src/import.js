import { defineAsyncComponent } from "vue";
const Loader = defineAsyncComponent(() => import("./components/Modals/Loader.vue"));
const SelectLocalization = defineAsyncComponent(() => import("./components/Handlers/SelectLocalization.vue"));


export default {
    Loader,
    SelectLocalization
}