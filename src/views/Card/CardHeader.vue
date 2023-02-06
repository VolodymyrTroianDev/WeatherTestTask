<template>
  <div class="card-header">
    <div class="card-header__left-block">
      <button
        class="header-text-style card-header__btn"
        :class="{ active: props.openMenu === 'day' }"
        @click="onSwitchMenu('day')"
      >
        {{ $t("main.day") }}
      </button>
      <button
        class="header-text-style card-header__btn"
        :class="{ active: props.openMenu === 'week' }"
        @click="onSwitchMenu('week')"
      >
        {{ $t("main.week") }}
      </button>
    </div>
    <div class="card-header__right-block">
      <div class="header-text-style">{{ $t("main.cityAndVillage") }}:</div>
      <div class="header-text-style">{{ cardsCityName }}</div>
      <star-img
        class="favorite-btn"
        :class="{ 'active-star': props.cardData.favoriteCard }"
        @click="addToFavoriteList"
      />
      <close-btn v-if="route.path === '/uk'" @click="removeCard('remove')" />
    </div>
  </div>
  <confirmed-menu
    v-if="general.modal.openConfirmedModal"
    :closeModal="OnCloseModal"
  />
</template>
  <script setup>
import { reactive, defineProps, computed } from "vue";
import { setItem } from "../../services/LocalStorage";
import { useGeneralStore } from "../../store/generalStore";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const { t } = useI18n();
const route = useRoute();
const props = defineProps(["cardData", "switchMenu", "openMenu"]);
const general = useGeneralStore();

const onSwitchMenu = (type) => {
  props.switchMenu(type);
};

const cardsCityName = computed(() => {
  return props.cardData.cityName[general.useLanguage];
});

const addToFavoriteList = () => {
  const cardData = props.cardData;
  let favoriteList = general.favoriteList;
  cardData.favoriteCard = !cardData.favoriteCard;
  if (cardData.favoriteCard) {
    if (favoriteList.length < 5) {
      favoriteList.push(cardData);
      setItem("favoriteList", favoriteList);
    } else general.openModalMessage(t("main.maxCardList"));
  } else removeCard("favorite");
};

const removeCard = (type) => {
  general.openConfirmed(t("main.deleteCard"), type);
};

const OnCloseModal = (type) => {
  if (type) {
    if (general.modal.type === "remove") {
      general.cardList = general.cardList.filter(
        (el) => el.cityName.en != props.cardData.cityName.en
      );
      general.clearMessage()
    } else {
      props.cardData.favoriteCard = false;
      general.favoriteList = general.favoriteList.filter(
        (el) => el.cityName.en != props.cardData.cityName.en
      );
      setItem("favoriteList", general.favoriteList);
      general.modal.openConfirmedModal = false;
    }
  } else {
    props.cardData.favoriteCard = true;
    general.clearMessage()
  }
};
</script>
  <style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 10px 0 10px;
  & .card-header__left-block,
  .card-header__right-block {
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  & .card-header__btn {
    color: var(--border-background-main);
    cursor: pointer;
    &:hover {
      transition: 400ms all;
      color: white;
    }
  }
}
.active-star {
  fill: #ff7d03;
}
</style>