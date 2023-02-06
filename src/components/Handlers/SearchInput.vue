<template>
  <div class="main-container__input">
    <input
      v-focus
      type="text"
      :placeholder="props.placeholder"
      class="search-input"
      v-model="store.inputValue"
      @input="updateInput"
    />
    <div
      class="main-container__input__dropdown-menu"
      v-show="store.inputValue.length > 0"
    >
      <ul
        class="dropdown-menu__input__list"
        v-for="city in store.listCity"
        :key="city"
        @click="selectCity(city)"
      >
        <li>{{ city.country }}</li>
        <li>{{ languageCheck(city.local_names, route.params.locale) }}</li>
        <li>{{ city.state }}</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { getCity } from "../../services/apiFunction.js";
import { defineProps, reactive } from "vue";
import { useRoute } from "vue-router";
import { languageCheck } from "../../services/languageCheckFormatter";
const route = useRoute();
const store = reactive({ inputValue: "", listCity: {} });
const props = defineProps(["placeholder", "selectCity"]);

const updateInput = () => {
  if (store.inputValue.length > 0) {
    getCity(store.inputValue, 5).then((res) => {
      store.listCity = res.data;
    });
  }
};

const selectCity = (city) => {
  props.selectCity(city);
  store.inputValue = "";
};
</script>
<style lang="scss" scoped>
.main-container__input {
  position: relative;
  max-width: 240px;
  width: 100%;
  & .search-input {
    width: 100%;
    background: var(--background-main);
    border: none;
    color: rgb(198, 194, 194);
    padding: 0 10px 0 10px;
    border-bottom: 1px solid white;
    &::placeholder {
      color: rgb(198, 194, 194);
      font-size: 15px;
    }
  }
  & .main-container__input__dropdown-menu {
    position: absolute;
    width: 100%;
    background: #474747;
    & .dropdown-menu__input__list {
      display: flex;
      gap: 20px;
      font-size: 14px;
      padding: 4px 10px 4px 10px;
      color: rgb(198, 194, 194);
      &:hover {
        background: #737272;
        cursor: pointer;
      }
    }
  }
}
</style>