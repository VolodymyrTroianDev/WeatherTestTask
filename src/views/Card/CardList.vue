<template>
  <div class="card-list">
    <card-header
      :cardData="props.cardData"
      :switchMenu="onSwitchMenu"
      :openMenu="store.openMenu"
    />
    <div
      class="card-list__block card-list__day"
      v-if="store.openMenu === 'day'"
    >
      <div class="card-list__table">
        <card-model :cards="cardsDay" />
      </div>
      <div class="card-list__chart">
        <chart :list="cardsDay.list" />
      </div>
    </div>
    <div
      class="card-list__block card-list__week"
      v-if="store.openMenu === 'week'"
    >
      <div class="card-list__table">
        <card-model :cards="cardsWeek" />
      </div>
      <div class="card-list__chart">
        <chart :list="cardsWeek.list" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, defineProps, computed } from "vue";
import { useGeneralStore } from "../../store/generalStore";

const store = reactive({ openMenu: "week" });
const props = defineProps(["cardData"]);
const general = useGeneralStore();

const onSwitchMenu = (type) => {
  store.openMenu = type;
};

const cardsDay = computed(() => {
  return props.cardData.Day[general.useLanguage];
});

const cardsWeek = computed(() => {
  return props.cardData.Week[general.useLanguage];
});
</script>

<style lang="scss" >
.card-list {
  & .card-list__block {
    padding: 10px;
    & .card-list__table {
      max-height: 300px;
      height: 100%;
      overflow-y: auto;
      margin: 10px;
    }
  }
}
</style>