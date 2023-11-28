<template>
  <div class="login-form-container">
    <v-form class="login-form" @submit.prevent="submit">
      <h2 class="login-txt">Log in</h2>
      <div>
        <div>
          <label>Email</label>
          <v-text-field
            placeholder="example@mail.com"
            variant="outlined"
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            density="compact"
            class="my-1"
          ></v-text-field>
        </div>
        <v-btn class="w-100 login-btn" type="submit">Log in</v-btn>
      </div>
    </v-form>
  </div>
</template>
<script>
import { useField, useForm } from "vee-validate";
export default {
  emits: ["submit"],
  setup(props, ctx) {
    const { handleSubmit } = useForm({
      validationSchema: {
        email(value) {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;
          return "Must be a valid e-mail.";
        },
      },
    });
    const email = useField("email");

    const submit = handleSubmit(async (values) => {
      ctx.emit("submit", values.email);
    });
    return {
      email,
      submit,
    };
  },
};
</script>
<style>
.login-form {
  width: 459px;
  height: 220px;
  padding: 48px;
}
.login-form-container {
  width: 459px;
  height: 330px;
  border-radius: 8px;
  background: var(--bg-primary, #fff);
  display: block;
  margin: 0 auto;
  box-sizing: border-box;
}
.login-txt {
  margin-bottom: 40px;
}
.login-btn {
  margin: 20px 0;
  background-color: #6c69ff;
  color: #ffffff;
}
</style>
