<template>
  <div class="container">
    <router-link to="/landing">
      <i class="fas fa-chevron-left title"></i>
    </router-link>
    <h2 class="spaced-title">Create Account</h2>
    <div>
      <label for="name">Name</label>
      <input type="text" class="text-field" />
      <label for="email">Email</label>
      <input type="text" class="text-field" />
      <label for="password">Password</label>
      <div class="password-container">
        <input type="password" class="text-field" />
        <img class="eye" src="../../../assets/logos/eye_closed.svg" alt="eye_closed" />
      </div>
    </div>
    <div class="buttons">
      <router-link to="/login">
        <input type="button" class="btn btn-primary" value="Log in" />
      </router-link>
      <hr class="hrr" />
      <router-link to="/login">
        <input type="button" class="btn btn-secondary" value="Sign up" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" src="./TheRegister.ts"></script>
<style scoped src="./TheRegister.scss"></style>
