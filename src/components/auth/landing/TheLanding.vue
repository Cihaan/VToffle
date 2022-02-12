<template>
  <div class="container">
    <h1 class="title">Toffle</h1>
    <img src="../../../assets/logos/clap_icon.svg" alt="movie clap" />
    <div class="text">
      <h2 class="spaced-title">What to watch next?</h2>
      <p>List movies and tv shows that you heard about to know which to watch next.</p>
    </div>
    <div class="buttons">
      <router-link to="/login">
        <input type="button" class="btn btn-primary" value="Log in" />
      </router-link>
      <router-link to="/register">
        <input type="button" class="btn btn-secondary" value="Sign up" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" src="./TheLanding.ts"></script>
<style scoped src="./TheLanding.scss"></style>
