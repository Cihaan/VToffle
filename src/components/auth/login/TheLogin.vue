<template>
  <div class="container">
    <router-link to="/landing">
      <i class="fas fa-chevron-left title"></i>
    </router-link>
    <h2 class="spaced-title">Welcome back</h2>
    <div>
      <label for="email">Email</label>
      <input v-model="email" type="text" class="text-field" />
      <label for="password">Password</label>
      <div class="password-container">
        <input v-model="password" type="password" class="text-field" />
        <img
          class="eye"
          @click="showPassword"
          src="../../../assets/logos/eye_open.svg"
          alt="show password"
        />
      </div>
    </div>
    <div class="buttons">
      <router-link to="/find">
        <input type="button" class="btn btn-primary" value="Log in" />
      </router-link>
      <hr class="hrr" />
      <router-link to="/register">
        <input type="button" class="btn btn-secondary" value="Sign up" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" src="./TheLogin.ts"></script>
<style scoped src="./TheLogin.scss"></style>
