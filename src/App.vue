<template>
  <v-app>
    <v-app-bar v-if="isLoggedIn">
      <v-avatar :tile="true">
        <img :src="require('@/assets/logo.svg')" alt="logo" />
      </v-avatar>
      <v-app-bar-title>
        <v-text-field
          box
          label="Append"
          append-icon="mdi-search"
          class="w-50"
        ></v-text-field>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-avatar :tile="true" color="secondary" size="56"> </v-avatar>
    </v-app-bar>
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
export default {
  name: "App",
  components: {},
  setup() {
    const store = useUserStore();
    const isLoggedIn = computed(()=> store.isLoggedIn);

    watch(isLoggedIn, (signIn)=>{
      if(signIn)
        router.push('/');
    })
    return {
      isLoggedIn
    };
  }
};
</script>
<style scoped>
.nav-bar {
  box-shadow: 2px 4px 36px 0px rgba(10, 5, 255, 0.16);
}
</style>
