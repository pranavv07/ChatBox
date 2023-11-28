<template>
  <v-app>
    <Header :isLoggedIn="isLoggedIn" :email="email" @logout="signOut"></Header>
    <v-main>
      <v-container class="pa-0" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { useUserStore } from "@/store";
import { computed, watch } from 'vue';
import router from "@/router/index.js";
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    Header
  },
  setup() {
    const store = useUserStore()
    const isLoggedIn = computed(()=> store.isLoggedIn)
    const email = computed(()=> store.email)

    function signOut() {
      store.logout();
    }

    watch(isLoggedIn, (signIn)=>{
      if(signIn)
        router.push('/');
      else 
        router.push('/login');
    })

    return {
      isLoggedIn,
      email,
      signOut
    };
  }
};
</script>
