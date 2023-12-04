<template>
  <v-app-bar v-if="$route.name !== 'Login' && isLoggedIn">
    <v-row class="ma-1" align="center">
      <v-col cols="6" class="d-flex align-center">
        <v-avatar :tile="true" class="mx-1" size="50">
          <img :src="require('@/assets/head-logo.svg')" alt="logo" />
        </v-avatar>
        <v-responsive class="ma-0 pa-0 mx-1" max-width="368px">
          <v-text-field
            variant="outlined"
            placeholder="Search"
            density="compact"
            hide-details
            append-inner-icon="mdi-magnify"
            class="mx-2 search-input-field"
            clearable
            v-model="searchChat"
          ></v-text-field>
        </v-responsive>
      </v-col>
      <v-col cols="6" class="d-flex justify-end align-center">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-avatar
              :tile="true"
              color="#9C9B9F"
              size="50"
              v-bind="props"
            >
              <span>{{ getFirstLetter }}</span>
            </v-avatar>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title @click="$emit('logout')">Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
<script>
import { ref, computed, watch } from "vue";
import { useUserStore } from '@/store';
export default {
  props: ["isLoggedIn", "email"],
  setup(props) {
    const store = useUserStore();
    const searchChat = ref("");
    const getFirstLetter = computed(() => props.email.toUpperCase().charAt(0));

   watch(searchChat, (val) => {
      if(val.length > 2 || !val) {
        store.updateSearch(val);
      }
   })
    return {
      searchChat,
      getFirstLetter,
    };
  },
};
</script>
<style scoped>
.search-input-field {
  border-radius: 8px;
  background-color: #eceef3;
}
</style>
