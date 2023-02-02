import { defineStore } from "pinia";
import { getItem } from "../services/LocalStorage";
export const useGeneralStore = defineStore({
    id: "GeneralStore",
    state: () => ({
        useLanguage: getItem("language") || "ua",
        statusLogin: false,
        statusLoader: false,
        email: "",
        name: "",
        Errors: {
            login: { status: false, text: "" },
            register: { status: false, text: "" },
        },
        photoProfile: null,
        userInfo: null,
        openLoginModal: false,
        openRegistrationModal: false,
        openForgotPasswordModal: false,
        openForgotPasswordModalStep1: true,
        openForgotPasswordModalStep2: false,
        widthScreen: "",
        dataLogin: { email: "", password: "" },
        screenWidth: null,
        dataRegister: {
            name: "",
            surname: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        openFilterSideBar: false,
        openLeftSideBar: true,
    }),
    getters: {
    },
    actions: {

    }
})

