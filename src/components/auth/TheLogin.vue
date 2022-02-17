<script lang="ts" setup>
import { reactive } from "vue";
import axios from "axios";
import router from "../../router/route";
import TheLoading from "../utils/TheLoading.vue";
import TheNotifBox from "../utils/TheNotifBox.vue";
import { onMounted } from "vue";

const data = reactive({
  email: "",
  password: "",
  state: "",
  title: "",
  msg: "",
  to: "",
});

const on = onMounted(async () => {
  data.state = "sending";
  await axios
    .get("http://localhost:5000/auth/user", {
      headers: {
        authorization: "BEARER " + localStorage.token,
      },
    })
    .then((rep) => {
      if (rep.status === 200) {
        router.push({ path: "/profile" });
      }
    })
    .catch((err) => {
      if (err.response.data === "Forbidden") {
        router.push({ path: "/login" });
        data.state = ""
      }
    });
});

function showPassword(event: Event): void {
  let element = event.target as HTMLElement;

  if (element.getAttribute("alt") === "show password") {
    element.setAttribute("src", "/src/assets/logos/eye_closed.svg");
    element.setAttribute("alt", "hide password");
    element.previousElementSibling?.setAttribute("type", "text");
  } else {
    element.setAttribute("src", "/src/assets/logos/eye_open.svg");
    element.setAttribute("alt", "show password");
    element.previousElementSibling?.setAttribute("type", "password");
  }
}

async function handleSubmit(): Promise<void> {
  let user = {
    email: data.email,
    password: data.password,
  };

  data.state = "sending";
  let res = await axios
    .post("http://localhost:5000/auth/login", user)
    .then((rep) => {
      if (rep.statusText === "OK") {
        data.state = "";
        localStorage.token = rep.data.accessToken;
        router.push({ path: "/profile" });
      }
    })
    .catch((err) => {
      data.state = "sent";
      data.title = err.response.data.type;
      data.msg = err.response.data.message;
      data.to = "";
    });
}
</script>

<template>
  <div class="container">
    <router-link to="/landing">
      <i class="fas fa-chevron-left title"></i>
    </router-link>
    <h2 class="spaced-title">Welcome back</h2>
    <div>
      <label for="email">Email</label>
      <input v-model="data.email" type="text" class="text-field" />
      <TheLoading v-if="data.state === 'sending'" />
      <TheNotifBox
        v-if="data.state === 'sent'"
        :title="data.title"
        :msg="data.msg"
        :to="data.to"
        class="center"
      />
      <router-view></router-view>
      <label for="password">Password</label>
      <div class="password-container">
        <input v-model="data.password" type="password" class="text-field" />
        <img
          class="eye"
          @click="showPassword"
          src="../../assets/logos/eye_open.svg"
          alt="show password"
        />
      </div>
    </div>
    <div class="buttons">
      <input type="button" @click="handleSubmit" class="btn btn-primary" value="Log in" />
      <hr class="hrr" />
      <router-link to="/register">
        <input type="button" class="btn btn-secondary" value="Sign up" />
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.center {
  position: absolute;
  z-index: 1;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 85%;
}
.password-container {
  position: relative;
  .eye {
    position: absolute;
    right: 15px;
    bottom: 20px;
    transition: all ease-in 200ms;
  }
  input:focus-within + .eye {
    bottom: 25px;
  }
}
</style>
