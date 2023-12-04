<template>
  <v-container fluid>
    <v-row no-gutter>
      <v-col cols="4" class="pa-0 ma-0">
        <ChatList :chats="chats" @selected-chat="handleSelectedChat"></ChatList>
      </v-col>
      <v-col cols="8" class="pa-0 ma-0">
        <ChatBox :selectedChat="selectedChat" :chats="chats"></ChatBox>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ChatBox from "@/components/ChatBox.vue";
import ChatList from "@/components/ChatList.vue";
import { computed, ref } from "vue";
import { useUserStore } from "@/store";
export default {
  components: {
    ChatBox,
    ChatList
  },
  setup() {
    const store = useUserStore()
    const receivedChatData = ref(null)

    const chats = computed(()=> store.chats)
    const selectedChat = computed(()=> receivedChatData.value)

    function handleSelectedChat(data) {
      receivedChatData.value = data;
    }

    return {
      chats,
      selectedChat,
      receivedChatData,
      handleSelectedChat
    };
  },
};
</script>