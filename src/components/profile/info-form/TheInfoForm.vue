<template>
  <div class="info-form-container">
    <div class="header">
      <div class="banner">
        <a @click="goBack"><i class="fas fa-chevron-left"></i></a>
        <h2>Profile</h2>
        <button
          type="button"
          class="not-active"
          :class="isActive === true ? 'active' : ''"
          :disabled="isDisabled"
        >
          Done
        </button>
      </div>
    </div>
    <div class="all">
      <div class="form">
        <div class="content">
          <label for="name">Name</label>
          <input
            @keyup="onKey"
            v-model="name"
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
            v-model="email"
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

<script lang="ts" src="./TheInfoForm.ts"></script>
<style scoped src="./TheInfoForm.scss"></style>
