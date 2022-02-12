<template>
  <div>
    <div class="info-form-container">
      <div class="header">
        <div class="banner">
          <a @click="goBack"><i class="fas fa-chevron-left"></i></a>
          <h2>Profile</h2>
          <button
            type="button"
            :class="isActive === true ? 'active' : 'not-active'"
            :disabled="isDisabled"
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
              v-model="password"
              type="password"
              id="password"
              name="password"
              required
            />
            <img
              class="eye"
              @click="showPassword($event)"
              src="../../../assets/logos/eye_open.svg"
              alt="show password"
            />
          </div>
          <hr />
          <div class="content">
            <label for="password">Confirm Password</label>
            <input
              @keyup="onKey"
              v-model="cpassword"
              type="password"
              id="cpassword"
              name="cpassword"
              required
            />
            <img
              @click="showPassword($event)"
              class="eye"
              src="../../../assets/logos/eye_open.svg"
              alt="show password"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./ThePasswordForm.ts"></script>
<style scoped src="./ThePasswordForm.scss"></style>
