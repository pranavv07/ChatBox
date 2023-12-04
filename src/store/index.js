import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { ref } from "vue";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    isLoggedIn: useStorage("isLoggedIn", false),
    email: useStorage("email", null),
    search: ref(""),
    chats: useStorage("chats", [
      {
        name: "Coding Pals",
        created_at: "4Feb2022",
        messages: [
          {
            created_at: "12:34AM",
            msg: "Message display",
          },
        ],
      },
      {
        name: "Scouting",
        created_at: "4Feb2022",
        messages: [
          {
            created_at: "12:35AM",
            msg: "Message display",
          },
          {
            created_at: "12:35AM",
            msg: "Neque sagittis at ut consequat dolor odio penatibus lacus vel.",
          },
          {
            created_at: "12:35AM",
            msg: "Viverra arcu fusce suspendisse tortor. Euismod lorem sed libero gravida.",
          },
          {
            created_at: "12:35AM",
            msg: "Amet, in gravida aliquam duis maecenas",
          },
        ],
      },
      {
        name: "Sports",
        created_at: "4Feb2022",
        messages: [
          {
            created_at: "12:36AM",
            msg: "Message display",
          },
          {
            created_at: "12:36AM",
            msg: "Viverra arcu fusce suspendisse tortor. Euismod lorem sed libero gravida."
          }
        ],
      },
      {
        name: "Music",
        created_at: "4Feb2022",
        messages: [
          {
            created_at: "12:37AM",
            msg: "Message display",
          }
        ],
      },
    ]),
  }),
  getters: {
    filterChat: (state) => state.chats.filter(chat=> chat.name.toLowerCase().includes(state.search.toLowerCase())),
  },
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
    },
    updateSearch(search) {
      this.search = search;
    }
  },
});
