<template>
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
          <CreateChat
            :dialog="showChatBox"
            @create-chat="createNewChat"
          ></CreateChat>
        </v-list-subheader>
      </div>
      <div class="chat-list-scroll">
        <v-list-item
          lines="one"
          class="pa-0"
          v-for="(chat, index) in chats"
          :key="index"
        >
          <div class="chat-body" @click="selectedChat(chat)">
            <div class="d-flex align-items-center">
              <v-avatar :tile="false" rounded="8" color="#9C9B9F" size="56">{{
                getStartingTwoLetters(chat.name)
              }}</v-avatar>
              <div class="chat-description">{{ chat.name }}</div>
            </div>
            <div>
              <span class="chat-created">Created {{ chat.created_at }}</span>
            </div>
          </div>
        </v-list-item>
      </div>
    </v-list>
  </div>
</template>
<script>
import CreateChat from "@/components/CreateChatDialog.vue";
import { ref } from "vue";
import { useUserStore } from "@/store";
export default {
  props: ["chats"],
  components: {
    CreateChat,
  },
  setup(props, ctx) {
    const store = useUserStore();
    const showChatBox = ref(false);

    function getStartingTwoLetters(word) {
      return word.toUpperCase().charAt(0) + word.toUpperCase().charAt(1);
    }
    function createNewChat(userObj) {
      store.addChat(userObj);
    }
    function selectedChat(data) {
      ctx.emit("selected-chat", data);
    }
    return {
      showChatBox,
      getStartingTwoLetters,
      createNewChat,
      selectedChat,
    };
  },
};
</script>
<style scoped>
.chat-list {
  background-color: #ffffff;
  max-height: 100vh;
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
  color: #9c9b9f;
}
.chat-list-scroll {
  height: 500px;
  overflow-y: scroll;
}
</style>
