<template>
  <div class="card-model">
    <div class="card-model__title">
      <div class="card-model__title__text">{{ $t("main.hour") }}</div>
      <div class="card-model__title__text">{{ $t("main.temp") }}</div>
      <div class="card-model__title__text">{{ $t("main.wind_speed") }}</div>
      <div class="card-model__title__text">{{ $t("main.type_weather") }}</div>
    </div>
    <div
      class="card-model__content"
      v-for="card in props.cards.list"
      :key="card"
    >
      <div class="card-model__title__text">
        {{ moment(card.dt_txt).format("DD/MM/YY HH:mm") }}
      </div>
      <div class="card-model__title__text">{{ card.main.temp.toFixed(0) }}</div>
      <div class="card-model__title__text">{{ card.wind.speed }}</div>
      <div class="card-model__title__text">
        {{ card.weather[0].description }}
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from "moment";
import { defineProps } from "vue";

const props = defineProps(["cards"]);
</script>

<style lang="scss" scoped>
.card-model {
  & .card-model__title {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
  }
  & .card-model__title__text {
    color: var(--border-background-main);
    padding: 5px 0 5px 0;
    font-size: 13px;
  }
  & .card-model__content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    text-align: center;
  }
}
</style>