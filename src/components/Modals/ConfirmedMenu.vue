<template>
  <div class="modal">
    <div class="modal__title">
      <div class="header-text-style modal__title__text">
        {{ $t("main.confirmed") }}
      </div>
      <close-btn class="close-btn" @click="closeModal(false)" />
    </div>
    <div class="modal__content">
      <div class="modal__content__text">
        {{ general.modal.modalMessage }}
        <slot></slot>
      </div>
      <button class="modal__content__btn" @click="closeModal(true)">
        {{ $t("main.ok") }}
      </button>
    </div>
  </div>
</template>
  
  <script setup>
import { useGeneralStore } from "../../store/generalStore";
import { defineProps } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const props = defineProps(["closeModal"]);
const general = useGeneralStore();

const closeModal = (confirmed) => {
  props.closeModal(confirmed);
};
</script>