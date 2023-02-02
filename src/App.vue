
<template>
  <div id="nav">
    <div class="main">
      <router-view name="default" />
      <select-localization />
    </div>
    <!-- <loader /> -->
  </div>
</template>
<script setup>
import { useGeneralStore } from "./store/generalStore";
const general = useGeneralStore();
</script>
<style lang="scss">
.blur {
  filter: blur(4px);
}
</style>