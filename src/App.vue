
<template>
  <div class="main" :class="{ blur: general.statusLoader }">
    <router-view name="Header" />
    <router-view name="default" />
  </div>
  <loader v-if="general.statusLoader" />
</template>
<script setup>
import { useGeneralStore } from "./store/generalStore";

const general = useGeneralStore();

</script>
<style lang="scss">
.blur {
  filter: blur(4px);
}
.main {
  width: 1200px;
}
</style>