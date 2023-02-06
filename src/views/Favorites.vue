<template>
  <div class="favorites">
    <div class="favorites-menu__list">
      <TransitionGroup name="list">
        <div
          class="favorites-menu__list-element"
          v-for="card in List"
          :key="card"
        >
          <card-list :cardData="card" />
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useGeneralStore } from "../store/generalStore";

const general = useGeneralStore();

const List = computed(() => {
  return general.favoriteList;
});
</script>

<style lang="scss" scoped>
.favorites {
  width: 100%;
  & .favorites-menu__list {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    & .favorites-menu__list-element {
      max-width: 450px;
      width: 100%;
      background: rgb(66, 64, 64);
      margin: 5px;
      min-height: 500px;
      &:last-child {
        background: rgb(66, 64, 64);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      & .add-new-card {
        cursor: pointer;
      }
    }
  }
}
</style>