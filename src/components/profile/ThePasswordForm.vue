<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const data = reactive({
  isActive: false,
  isDisabled: true,
  password: "",
  cpassword: "",
});

function goBack(): void {
  router.back();
}

function toggleActive(bb: boolean): void {
  data.isActive = bb;
}

function onKey(): void {
  //si le formulaire est complété
  if (data.password.length !== 0 && data.cpassword.length !== 0) {
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
</script>

<template>
  <div>
    <div class="info-form-container">
      <div class="header">
        <div class="banner">
          <a @click="goBack"><i class="fas fa-chevron-left"></i></a>
          <h2>Profile</h2>
          <button
            type="button"
            :class="data.isActive === true ? 'active' : 'not-active'"
            :disabled="data.isDisabled"
          >
            Done
          </button>
        </div>
      </div>
      <div class="all">
        <div class="form">
          <div class="content">
            <label for="password">Password</label>
            <input
              @keyup="onKey"
              v-model="data.password"
              type="password"
              id="password"
              name="password"
              required
            />
            <img
              class="eye"
              @click="showPassword($event)"
              src="../../assets/logos/eye_open.svg"
              alt="show password"
            />
          </div>
          <hr />
          <div class="content">
            <label for="password">Confirm Password</label>
            <input
              @keyup="onKey"
              v-model="data.cpassword"
              type="password"
              id="cpassword"
              name="cpassword"
              required
            />
            <img
              @click="showPassword($event)"
              class="eye"
              src="../../assets/logos/eye_open.svg"
              alt="show password"
            />
          </div>
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
    background: var(--dark-05);
    font-size: 14px;
    font-weight: 100;
    margin: 0 12px 0 12px;
    width: 10px;
    width: 50%;
    border: none;
    outline: none;
    color: var(--white);
    height: 100%;
  }
  label {
    color: var(--white);
    width: 50%;
    flex-grow: 1;
  }
  img {
    width: 30px;
    height: 30px;
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
