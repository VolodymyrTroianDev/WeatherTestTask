<template>
  <div class="modal">
    <div class="modal__title">
      <div class="header-text-style modal__title__text">
        {{ $t("main.errorsWrong") }}
      </div>
      <close-btn class="close-btn" @click="closeModal" />
    </div>
    <div class="modal__content">
      <div class="modal__content__text">
        {{ general.modalMessage }}
      </div>
      <button class="modal__content__btn" @click="closeModal">
        {{ $t("main.ok") }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useGeneralStore } from "../../store/generalStore";
import { defineProps } from "vue";

const props = defineProps(["closeModal"]);
const general = useGeneralStore();

const closeModal = (confirmed) => {
  props.closeModal(confirmed);
};

</script>

<style lang="scss" scoped>
</style>