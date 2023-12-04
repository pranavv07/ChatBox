<template>
  <div class="chat-box">
    <v-row class="chat-box-container">
      <v-col class="chat-box-header">
        <h1>{{ selectedChat?.name }}</h1>
        <v-icon class="mdi-info-icon" icon="mdi-information-outline"></v-icon>
      </v-col>
      <div class="chat-box-body">
        <v-row
          v-for="(chat, index) in chats"
          :key="index"
          class="chat-msg-display"
        >
          <v-col cols="1">
            <v-avatar :tile="false" rounded="8" color="#9C9B9F" size="40">{{
              getStartingTwoLetters(`${chat?.name}`)
            }}</v-avatar>
          </v-col>
          <v-col cols="11">
            <div
              v-for="(message, index) in chat.messages"
              :key="index"
              class="chat-messages"
            >
              <div>
                <span>{{ message.msg }}</span>
                <span class="chat-time">{{message.created_at}}</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-row class="chat-box-footer">
        <v-col class="footer-elements">
          <v-icon icon="mdi-attachment"></v-icon>
          <v-text-field
            density="compact"
            hide-details
            class="mx-2 type-msg-input-field pa-0 ma-0"
            variant="outlined"
            placeholder="Write a message..."
          ></v-text-field>
          <v-btn class="send-msg-btn" icon="mdi-send" density="compact"></v-btn>
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>
<script>
export default {
  props: ["selectedChat", "chats"],
  setup() {
    function getStartingTwoLetters(word) {
      return word.toUpperCase().charAt(0) + word.toUpperCase().charAt(1);
    }
    return {
      getStartingTwoLetters,
    };
  },
};
</script>
<style scoped>
.mdi-info-icon {
  color: #9c9b9f;
}
.chat-box {
  background-color: #eceef3;
  height: 100vh;
}
.chat-box-container {
  padding: 20px;
  width: 774px;
  display: grid;
  margin: 0 auto;
  row-gap: 40px;
}
.chat-box-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.chat-box-body {
  height: 400px;
  max-height: 571px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.chat-box-footer {
  position: relative;
}
.type-msg-input-field {
  border-radius: 8px;
  background-color: #ffffff;
}

.send-msg-btn {
  border-radius: 8px;
  background-color: #6c69ff;
  color: #ffffff;
}

.footer-elements {
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat-msg-display {
  width: 774px;
  padding: 8px;
  display: flex;
}
.chat-messages {
  max-height: 100px;
  border-radius: 40px;
  width: fit-content;
  max-width: 400px;
  left: 50px;
  word-break: break-word;
  background-color: #fff;
  border-radius: 40px;
  padding: 8px;
  margin: 5px 0;
}
.chat-time {
  color: #9C9B9F;
  font-size: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  font-style: normal;
  font-weight: 400;
}
</style>
