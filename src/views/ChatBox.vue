<template>
  <v-container fluid>
    <v-row no-gutter>
      <v-col cols="4" class="pa-0 ma-0">
        <div class="chat-list">
          <v-list>
            <div class="chat-header">
              <v-list-title>Chats</v-list-title>
              <v-list-subheader>
                <CreateChat></CreateChat>
              </v-list-subheader>
            </div>
            <v-list-item lines="one" class="pa-0">
              <div class="chat-body">
                <div class="d-flex align-items-center">
                  <v-avatar :tile="true" color="primary" size="56"> </v-avatar>
                  <div class="chat-description">Hii</div>
                </div>
                <div>
                  <span>Created 4Feb2022</span>
                </div>
              </div>
            </v-list-item>
          </v-list>
        </div>
      </v-col>
      <v-col cols="8" class="pa-0 ma-0">
        <div class="chat-box">
            <h1>ChatBox</h1>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import CreateChat from "@/components/CreateChatDialog.vue";
import { ref } from "vue";
export default {
  components: {
    CreateChat,
  },
  setup() {
    const showChatBox = ref(false);

    function openCreateChatDialog() {
      console.log(this.showChatBox);
      this.showChatBox.value = true;
    }
    return {
      showChatBox,
      openCreateChatDialog,
    };
  },
};
</script>
<style scoped>
.chat-list{
    background-color: #FFFFFF;
    height: 100vh;
    padding: 10px;
}
.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.chat-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid gray;
  padding: 10px;
}
.chat-description {
  display: block;
  margin: auto 0;
}
.chat-box{
    background-color: #ECEEF3;;
    height: 100vh;
    padding: 10px;
}
</style>
