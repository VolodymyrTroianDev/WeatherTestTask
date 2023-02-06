import { defineStore } from "pinia";
import { getItem } from "../services/LocalStorage";
import { getWeather } from "../services/apiFunction.js";

export const useGeneralStore = defineStore({
    id: "GeneralStore",
    state: () => ({
        useLanguage: getItem("language") || "uk",
        statusLoader: false,
        cardList: [],
        favoriteList: getItem("favoriteList") || [],
        selfIpConfig: [],
        openModal: false,
        modal: {
            type: '',
            openConfirmedModal: false,
            modalMessage: '',
        }
    }),
    getters: {

    },
    actions: {
        async formationCard(lat, lon, cityName, t) {
            if (this.cardList.length < 5) {
                this.statusLoader = true;
                let Day = {};
                let Week = {};

                await this.getDayWeather(lat, lon).then((res) => {
                    Day = { en: res[0].data, uk: res[1].data }
                    Object.assign(Day, { en: res[0].data, uk: res[1].data })
                })
                await this.getWeekWeather(lat, lon).then((res) => {
                    Week = { en: res[0].data, uk: res[1].data }
                    Object.assign(Week, { en: res[0].data, uk: res[1].data })
                })
                this.cardList.push({
                    cityName,
                    Day,
                    Week,
                    favoriteCard: false
                })
            } else this.openModalMessage(t("main.maxCardList"));

            setInterval(() => { this.statusLoader = false }, 1000)
        },
        getDayWeather(lat, lon) {
            return Promise.all([getWeather(lat, lon, 9, 'en'), getWeather(lat, lon, 9, 'uk')])
        },
        getWeekWeather(lat, lon) {
            return Promise.all([getWeather(lat, lon, 40, 'en'), getWeather(lat, lon, 40, 'uk')])
        },
        openModalMessage(message) {
            this.openModal = true
            this.modalMessage = message
        },
        openConfirmed(message, type) {
            this.modal.openConfirmedModal = true;
            this.modal.modalMessage = message;
            this.modal.type = type;
        },
        clearMessage() {
            this.modal.openConfirmedModal = false;
            this.modal.modalMessage = '';
            this.modal.type = '';
        }

    }
})

