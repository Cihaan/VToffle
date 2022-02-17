<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import axios from "axios";
import TheLoading from "../utils/TheLoading.vue";
import TheNotifBox from "../utils/TheNotifBox.vue";

const router = useRouter();

const data = reactive({
  isActive: false,
  isDisabled: true,
  user: {
    id: 0,
    name: "",
    email: "",
  },
  fetching: true,
  state: "",
  to: "login",
  title: "",
  msg: "",
});

async function goBack(): Promise<void> {
  await router.back();
}

function toggleActive(bb: boolean): void {
  data.isActive = bb;
}

function onKey(): void {
  //si le formulaire est complété
  if (data.user.name.length !== 0 && data.user.email.length !== 0) {
    //on regarde si le bouton n'est pas déjà actif
    data.isDisabled = false;
    toggleActive(true);
  } else {
    //si le formulaire n'est pas rempli
    //si le bouton n'est pas déjà désactivé
    toggleActive(false);
    data.isDisabled = true;
  }
}

const on = onMounted(async () => {
  data.fetching = true;
  await axios
    .get("http://localhost:5000/auth/user", {
      headers: {
        authorization: "BEARER " + localStorage.token,
      },
    })
    .then((rep) => {
      if (rep.status !== 200) {
        router.push({ path: "/landing" });
      }
      data.user.id = rep.data[0].id;
      data.fetching = false;
      console.log(data.user);
    })
    .catch((err) => {
      if (err.response.data === "Forbidden") {
        router.push({ path: "/landing" });
      }
    });
});

async function handleSubmit(): Promise<void> {
  let user = {
    username: data.user.name,
    email: data.user.email,
  };

  data.fetching = true;
  let res = await axios
    .post(`http://localhost:5000/profile/info/${data.user.id}`, user, {
      headers: {
        authorization: "BEARER " + localStorage.token,
      },
    })
    .then((rep) => {
      data.fetching = false;
      data.state = "sent";
      data.title = rep.data.title;
      data.msg = rep.data.message;
      data.to = "profile";
    })
    .catch((err) => {
      data.fetching = false;
      data.state = "sent";
      data.title = err.response.data.type;
      data.msg = err.response.data.message;
      data.to = "";
    });
}
</script>

<template>
  <div class="info-form-container">
    <div class="header">
      <div class="banner">
        <a @click="goBack"><i class="fas fa-chevron-left"></i></a>
        <h2>Profile</h2>
        <button
          type="button"
          class="not-active"
          :class="data.isActive === true ? 'active' : ''"
          :disabled="data.isDisabled"
          @click="handleSubmit"
        >
          Done
        </button>
        <router-view></router-view>
      </div>
    </div>
    <div class="all">
      <TheLoading v-if="data.fetching === true" />
      <TheNotifBox
        v-if="data.state === 'sent'"
        :title="data.title"
        :msg="data.msg"
        :to="data.to"
        class="center"
      />
      <div class="form">
        <div class="content">
          <label for="name">Name</label>
          <input
            @keyup="onKey"
            v-model="data.user.name"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <hr />
        <div class="content">
          <label for="email">Email</label>
          <input
            @keyup="onKey"
            v-model="data.user.email"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: none;
  -webkit-text-fill-color: var(--white);
  transition: background-color 5000s ease-in-out 0s;
}

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

button,
input[type="submit"],
input[type="reset"] {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.info-form-container {
  box-sizing: border-box;
  height: 100vh;
}

.header {
  width: 100%;
  position: fixed;
  top: 0;
}

.banner {
  padding: 0 0 0 0;
  height: 80px;
  background-color: #2c2c2e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 28px;
    font-weight: 500;
    z-index: 1;
  }
  i {
    top: 30px;
    position: absolute;
    padding-left: 15px;
    font-size: 28px;
    color: var(--red);
    z-index: 3;
  }
  button {
    padding-right: 15px;
    z-index: 2;
  }
}

h2 {
  text-align: center;
}

.all {
  padding: 80px 30px 0 30px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--dark-05);
  border-radius: 8px;
  margin-top: 43px;
  hr {
    padding: 0;
    margin: 0;
    width: 100%;
    border-color: var(--dark-01);
    border-bottom: 20px;
  }
}

.content {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 45px;
  text-justify: auto;
  border-radius: 8px;
  padding: 0 13px 0 13px;
  input {
    flex-grow: 1;
    background: var(--dark-05);
    font-size: 14px;
    font-weight: 100;
    margin: 0 12px 0 12px;
    width: 100%;
    border: none;
    outline: none;
    color: var(--white);
    height: 100%;
  }
  label {
    color: var(--white);
  }
}

button {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: #545458;
  font-weight: 700;
}

.active {
  color: var(--red);
}
</style>
