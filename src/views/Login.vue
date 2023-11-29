<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row no-gutters>
      <v-col cols="6" md="6" xs="12">
        <div class="left-container">
          <div class="content-box">
            <div class="logo">
              <v-img :src="require('../assets/logo.svg')" contain />
            </div>
            <div class="title">Let’s Connect</div>
            <div class="subtitle">One click away from your Circle!!</div>
            <p class="paragraph">
              Nisi nunc et mi egestas nibh eget. Est cras suspendisse id erat
              elit felis, eu. Sollicitudin ullamcorper massa dictum enim id
              malesuada orci nibh pulvinar. Sed at feugiat arcu lorem et
              porttitor. Scelerisque amet orci congue dignissim.
            </p>
          </div>
        </div>
      </v-col>
      <v-col cols="6" md="6" xs="12">
        <div class="right-container">
            <LoginForm @submit="signIn"></LoginForm>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import LoginForm from "@/components/LoginForm.vue"
import { useUserStore } from "@/store";
export default {
  components:{
    LoginForm
  },
  setup() {
    const store = useUserStore();
    function signIn(email) {
      store.login(email);
    }

    return {
      signIn
    }
  },
};
</script>
<style scoped>
.right-container {
    background-color: #ECEEF3;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.logo {
  width: 216px;
  height: 205px;
  margin: 50px 0;
  flex-shrink: 0;
}
.left-container {
  background-color: #fff;
  box-shadow: 2px 4px 36px 0px rgba(10, 5, 255, 0.16);
  width: 756px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.content-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.title {
  color: var(--text-1, #393640);
  font-size: 48px;
  font-weight: 700;
  margin: 10px 0;
}
.subtitle {
  color: var(--text-1, #393640);
  font-size: 32px;
  font-weight: 600;
  margin: 20px 0;
}
.paragraph {
  color:#393640;
  text-align: center;
  width: 606.59px;
  height: 82.323px;
  flex-shrink: 0;
}
</style>
