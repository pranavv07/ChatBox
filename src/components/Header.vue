<template>
  <v-app-bar v-if="isLoggedIn">
    <v-row class="ma-1" align="center">
      <v-col cols="6" class="d-flex align-center">
        <v-avatar :tile="true" class="mx-1" size="50">
          <img :src="require('@/assets/head-logo.svg')" alt="logo" />
        </v-avatar>
        <v-responsive class="ma-0 pa-0 mx-1" max-width="400px">
          <v-text-field
            variant="outlined"
            placeholder="Search"
            density="compact"
            hide-details
            append-icon="mdi-search"
            class="mx-2"
          ></v-text-field>
        </v-responsive>
      </v-col>
      <v-col cols="6" class="d-flex justify-end align-center">
        <v-avatar :tile="true" color="#9C9B9F" size="50" @click="$emit('logout')">
          <span>{{ getFirstLetter }}</span>
        </v-avatar>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
<script>
import { computed } from "vue";
export default {
  props: ["isLoggedIn", "email"],
  setup(props) {
    const getFirstLetter = computed(() => props.email.toUpperCase().charAt(0));
    return {
      getFirstLetter,
    };
  },
};
</script>
