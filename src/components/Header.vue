<template>
  <header class="header">
    <nav class="nav">
      <li
        class="header-btn"
        @click="switchMenu('main')"
        :class="{ active: route.path === '/uk' }"
      >
        {{ $t("header.main") }}
      </li>
      <li
        class="header-btn"
        @click="switchMenu('favorites')"
        :class="{ active: route.path === '/uk/favorites' }"
      >
        {{ $t("header.favorites") }}
      </li>
    </nav>
    <select-localization />
  </header>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";

const store = reactive({ openMenu: "main" });
const route = useRoute();
const router = useRouter();

const switchMenu = (type) => {
  store.openMenu = type;
  router.push({ name: type });
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 55px 0 20px;
  gap: 20px;
  height: 48px;
  border-bottom: 1px solid var(--border-background-main);
  & .nav {
    display: flex;
    gap: 20px;
    font-size: 17px;
    color: var(--border-background-main);
    & .header-btn {
      cursor: pointer;
      &:hover {
        color: white;
      }
    }
  }
}
</style>