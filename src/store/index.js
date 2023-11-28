import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core';

export const useUserStore = defineStore({
    id: "user",
    state: () => ({
        isLoggedIn: useStorage('isLoggedIn', false),
        email: useStorage('email', null)
    }),
    actions: {
        login(email) {
            this.email = email;
            this.isLoggedIn = true;
        },
        logout() {
            this.email = null;
            this.isLoggedIn = false;
        }
    }
})