<template>
  <v-dialog width="500">
    <template v-slot:activator="{ props }">
      <v-btn
        class="create-chat-btn"
        density="compact"
        icon="mdi-plus"
        v-bind="props"
      ></v-btn>
    </template>

    <template v-slot:default>
      <v-card title="Create a Chat" append-icon="mdi-close" @click:append="closeDialog">
        <v-card-text>
          Chats are where your circle communicates. They’re best when organized
          around a topic — #Writing, for example.
        </v-card-text>
        <div>
          <div class="create-chat-body">
            <label class="name-label text-cener">Name</label>
            <v-text-field
              class="chat-input-field pa-3"
              placeholder="# e.g. Writing"
              outline
            ></v-text-field>
          </div>
        </div>
        <v-card-actions>
          <v-btn class="chat-action-btns w-100">Create</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { toRef } from "vue";
export default {
  name: "ChatBoxDialog",
  props: ["dialog"],
  setup(props) {
    const showChatBox = toRef(props.dialog)
    function closeDialog(){
      console.log("Hello");
    }
    return {
      showChatBox,
      closeDialog
    };
  },
};
</script>

<style>
.create-chat-btn {
  background-color: #6c69ff;
  color: #ffffff;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
}
.create-chat-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.name-label {
  display: block;
  margin: 0 auto;
  font-weight: 600;
}
.chat-input-field {
  width: 100%;
  display: block;
  margin: auto 0;
}
.chat-action-btns {
  background-color: #6c69ff;
  color: #ffffff;
}
</style>
