import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const isLoggedIn = ref(false);
    const chatbox = ref([]);
    const user = ref("");
    
    function login(email) {
            this.user = email;
            this.isLoggedIn = true;
    }
    return{
        isLoggedIn,
        chatbox,
        user,
        login
    }

})