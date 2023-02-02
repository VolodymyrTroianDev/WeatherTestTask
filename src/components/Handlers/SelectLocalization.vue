<template>
  <div class="localization" @click="toggleDropdown()">
    <ua-img class="pointer" v-if="GeneralStore.useLanguage === 'ua'" />
    <uk-img class="pointer" v-else />
    <div class="localization__dropdown" v-if="store.activeDropdown">
      <ua-img class="pointer" @click="selectLanguage('ua')" />
      <uk-img class="pointer" @click="selectLanguage('en')" />
    </div>
  </div>
</template>
  
<script setup>
import { setItem } from "../../services/LocalStorage.js";
import { onMounted, reactive } from "vue";
import { useGeneralStore } from "../../store/generalStore";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const GeneralStore = useGeneralStore();
const { locale } = useI18n();
const router = useRouter();

const store = reactive({
  activeDropdown: false,
});

const selectLanguage = (locales) => {
  setItem("language", locales);
  if (locale.value !== locales) {
    locale.value = locales;
    GeneralStore.useLanguage = locales;
    const to = router.resolve({ params: { locale: locales } });
    router.push(to);
  }
};

const toggleDropdown = () => {
  store.activeDropdown = !store.activeDropdown;
};

onMounted(() => {
  selectLanguage(GeneralStore.useLanguage);
});
</script>
  
  <style lang="scss" scoped>
.localization {
  position: relative;

  img {
    cursor: pointer;
  }
}

.localization__dropdown {
  width: 38px;
  padding: 7px;
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border-radius: 5px;

  img {
    border-radius: 5px;
    border: 1px solid rgb(230, 230, 230);
    cursor: pointer;

    &:first-child {
      margin-bottom: 5px;
    }
  }
}
</style>
  