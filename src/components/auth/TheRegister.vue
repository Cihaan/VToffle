<script lang="ts" setup>
import { reactive } from "vue";

const data = reactive({
  name: "",
  email: "",
  password: "",
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

function handleSubmit(): void {}
</script>

<template>
  <div class="container">
    <router-link to="/landing">
      <i class="fas fa-chevron-left title"></i>
    </router-link>
    <h2 class="spaced-title">Create Account</h2>
    <div>
      <label for="name">Name</label>
      <input v-model="data.name" id="name" name="name" type="text" class="text-field" />
      <label for="email">Email</label>
      <input
        v-model="data.email"
        id="email"
        name="email"
        type="email"
        class="text-field"
      />
      <label for="password">Password</label>
      <div class="password-container">
        <input
          v-model="data.password"
          id="password"
          name="password"
          type="password"
          class="text-field"
        />
        <img
          class="eye"
          @click="showPassword"
          src="../../assets/logos/eye_open.svg"
          alt="show password"
        />
      </div>
    </div>
    <div class="buttons">
      <router-link to="/login">
        <input type="button" class="btn btn-primary" value="Log in" />
      </router-link>
      <hr class="hrr" />
      <input
        type="submit"
        @click="handleSubmit"
        class="btn btn-secondary"
        value="Sign up"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
