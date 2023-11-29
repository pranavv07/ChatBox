<template>
  <v-dialog v-model="showChatBox" activator="parent" width="500">
    <v-card>
      <v-card-item>
        <v-card-title> Create a Chat </v-card-title>
        <template v-slot:append>
          <v-icon icon="mdi-close" @click="closeDialog"></v-icon>
        </template>
      </v-card-item>
      <v-card-text>
        Chats are where your circle communicates. They’re best when organized
        around a topic — #Writing, for example.
      </v-card-text>
      <v-form @submit.prevent="submit">
        <div class="create-chat-body">
          <label class="name-label text-cener">Name</label>
          <v-text-field
            class="chat-input-field pa-3"
            placeholder="# e.g. Writing"
            variant="outlined"
            density="compact"
            :error-messages="chatName.errorMessage.value"
            v-model="chatName.value.value"
          ></v-text-field>
        </div>
        <v-card-actions>
          <v-btn class="chat-action-btns w-100" type="submit">Create</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>
<script>
import { useField, useForm } from "vee-validate";
import { toRef } from "vue";
import moment from "moment";
export default {
  name: "ChatBoxDialog",
  props: ["dialog"],
  emits: ["create-chat"],
  setup(props, ctx) {
    const showChatBox = toRef(props.dialog);

    const { handleSubmit } = useForm({
      validationSchema: {
        chatName(value) {
          if (value) return true;
          return "Must be a valid field.";
        },
      },
    });

    const chatName = useField("chatName");
    
    const submit = handleSubmit(async (values) => {
      let userObj = {
        name: values.chatName,
        created_at: moment().format("DDMMMYYYY"),
        messages: [],
      };
      ctx.emit("create-chat", userObj);
      setTimeout(()=>{
        closeDialog();
      },200)
    });

    function closeDialog() {
      showChatBox.value = false;
    }

    return {
      chatName,
      showChatBox,
      closeDialog,
      handleSubmit,
      submit
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
