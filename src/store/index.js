import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core';

export const useUserStore = defineStore({
    id: "user",
    state: () => ({
        isLoggedIn: useStorage('isLoggedIn', false),
        email: useStorage('email', null),
        chats: useStorage('chats',[
            {
              name: "Coding Pals",
              created_at: "4Feb2022",
              messages: [],
            },
            {
              name: "Scouting",
              created_at: "4Feb2022",
              messages: [],
            },
            {
              name: "Sports",
              created_at: "4Feb2022",
              messages: [],
            },
            {
              name: "Music",
              created_at: "4Feb2022",
              messages: [],
            },
          ])
    }),
    actions: {
        login(email) {
            this.email = email;
            this.isLoggedIn = true;
        },
        logout() {
            this.email = null;
            this.isLoggedIn = false;
        },
        addChat(userObj) {
            this.chats.push(userObj);
        }
    }
})