<template>
  <div class="main-menu">
    <div class="main-menu__list">
      <TransitionGroup name="list">
        <div class="main-menu__list-element" v-for="card in List" :key="card">
          <card-list :cardData="card" />
        </div>
      </TransitionGroup>
      <div class="main-menu__list-element">
        <add-card
          v-if="store.showSearchInput"
          class="add-new-card"
          @click="toggleInput"
        />
        <Transition name="bounce">
          <search-input
            v-if="!store.showSearchInput"
            :placeholder="$t('main.city')"
            :selectCity="onSelectCity"
          />
        </Transition>
      </div>
    </div>
  </div>
  <message-modal v-if="general.openModal" :closeModal="OnCloseModal" />
</template>

<script setup>
import { computed, onMounted, reactive } from "vue";
import { useGeneralStore } from "../store/generalStore";
import { getSelfIp, getCity } from "../services/apiFunction";
import { useI18n } from "vue-i18n";

const store = reactive({ showSearchInput: false });
const general = useGeneralStore();
const { t } = useI18n();

onMounted(() => {
  getSelfIp().then((res) => {
    if (isEmpty(general.selfIpConfig)) {
      general.selfIpConfig = res.data;
      getCity(res.data.city, 5).then((res) => {
        const city = res.data[0];
        if (validateFunction(city)) {
          onSelectCity(city);
        }
      });
    }
  });
});

const isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
};

const onSelectCity = (city) => {
  if (city) {
    if (validateFunction(city)) {
      general.formationCard(
        city.lat,
        city.lon,
        {
          en: city.local_names.en,
          uk: city.local_names.uk,
        },
        t
      );
      toggleInput();
    } else general.openModalMessage(t("main.cityExists"));
  }
};

const validateFunction = (city) => {
  const validateName = general.cardList.filter(
    (el) => el.cityName.en === city.local_names.en
  );
  if (validateName.length === 0) {
    return true;
  } else return false;
};

const toggleInput = () => {
  store.showSearchInput = !store.showSearchInput;
};

const List = computed(() => {
  return general.cardList;
});

const OnCloseModal = (type) => {
  general.openModal = false;
};
</script>

<style lang="scss" scoped>
.main-menu {
  width: 100%;
  & .main-menu__list {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    & .main-menu__list-element {
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