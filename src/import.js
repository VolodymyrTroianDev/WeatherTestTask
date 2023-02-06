import { defineAsyncComponent } from "vue";

const Loader = defineAsyncComponent(() => import("./components/Modals/Loader.vue"));
const SelectLocalization = defineAsyncComponent(() => import("./components/Handlers/SelectLocalization.vue"));
const SearchInput = defineAsyncComponent(() => import("./components/Handlers/SearchInput.vue"));
const CardList = defineAsyncComponent(() => import("./views/Card/CardList.vue"));
const Chart = defineAsyncComponent(() => import("./views/Card/Chart.vue"));
const apexchart = defineAsyncComponent(() => import("vue3-apexcharts"));
const CardModel = defineAsyncComponent(() => import("./views/Card/CardModel.vue"));
const CardHeader = defineAsyncComponent(() => import("./views/Card/CardHeader.vue"));
const MessageModal = defineAsyncComponent(() => import("./components/Modals/MessageModal.vue"));
const ConfirmedMenu = defineAsyncComponent(() => import("./components/Modals/ConfirmedMenu.vue"));


export default {
    Loader,
    SelectLocalization,
    SearchInput,
    CardList,
    Chart,
    apexchart,
    CardModel,
    CardHeader,
    MessageModal,
    ConfirmedMenu
}