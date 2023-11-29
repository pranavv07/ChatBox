<template>
  <v-container fluid>
    <v-row no-gutter>
      <v-col cols="4" class="pa-0 ma-0">
        <div class="chat-list">
          <v-list>
            <div class="chat-header">
              <v-list-item>
                <v-list-item-title class="chat-header-text">Chats</v-list-item-title>
              </v-list-item>
              <v-list-subheader class="pa-0">
                <v-btn
                  class="create-chat-btn"
                  density="compact"
                  icon="mdi-plus"
                  @click="showChatBox = true"
                >
                </v-btn>
                <CreateChat :dialog="showChatBox" @create-chat="createNewChat"></CreateChat>
              </v-list-subheader>
            </div>
            <v-list-item
              lines="one"
              class="pa-0"
              v-for="(c, index) in chats"
              :key="index"
            >
              <div class="chat-body">
                <div class="d-flex align-items-center">
                  <v-avatar
                    :tile="false"
                    rounded="8"
                    color="#9C9B9F"
                    size="56"
                    >{{ getStartingTwoLetters(c.name) }}</v-avatar
                  >
                  <div class="chat-description">{{ c.name }}</div>
                </div>
                <div>
                  <span class="chat-created">Created {{ c.created_at }}</span>
                </div>
              </div>
            </v-list-item>
          </v-list>
        </div>
      </v-col>
      <v-col cols="8" class="pa-0 ma-0">
        <div class="chat-box">
          <div class="chat-box-header">
            <h1>ChatBox</h1>
            <v-icon icon="md:info" color="green darken-2"></v-icon>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import CreateChat from "@/components/CreateChatDialog.vue";
import { computed, ref } from "vue";
import { useUserStore } from "@/store";
export default {
  components: {
    CreateChat,
  },
  setup() {
    const store = useUserStore();
    const showChatBox = ref(false);

    const chats = computed(()=> store.chats)

    function getStartingTwoLetters(word) {
      return word.toUpperCase().charAt(0) + word.toUpperCase().charAt(1);
    }

    function createNewChat(userObj){
      store.addChat(userObj)
    }

    return {
      showChatBox,
      chats,
      getStartingTwoLetters,
      createNewChat
    };
  },
};
</script>
<style scoped>
.chat-list {
  background-color: #ffffff;
  height: 100vh;
  padding: 10px;
}
.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.chat-header-text {
  color: #000;
  font-weight: 600;
  font-size: 32px;
}
.chat-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-top: 20px;
}
.chat-body:hover {
  background-color: #eceef3;
  cursor: pointer;
}
.chat-description {
  display: block;
  margin: auto 5px;
  font-weight: 600;
}
.chat-created {
  font-size: 13px;
  color: #9C9B9F;
}
.chat-box {
  background-color: #eceef3;
  height: 100vh;
  padding: 20px;
}
.chat-box-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
