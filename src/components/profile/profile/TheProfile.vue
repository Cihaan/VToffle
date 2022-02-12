<template>
  <div class="profile-container">
    <div class="header">
      <div class="banner">
        <!-- <a @click="goBack"><i class="fas fa-chevron-left"></i></a> -->
        <h2>Profile</h2>
      </div>
    </div>
    <div class="all">
      <div class="image-profile">
        <img src="../../../assets/logos/profile-icon.png" alt="profile" />
        <h2>Francky Brooks</h2>
        <p>francky@gmail.com</p>
      </div>
      <div class="profile-menu">
        <router-link to="info-form">
          <div class="section">
            Name and personal details
            <i class="fas fa-chevron-right"></i>
          </div>
        </router-link>
        <hr />
        <router-link to="/pwd-form">
          <div class="section">
            Password and security
            <i class="fas fa-chevron-right"></i>
          </div>
        </router-link>
      </div>
      <router-link tag="button" class="btn btn-secondary" to="/landing"
        >Log Out
      </router-link>
    </div>
    <the-navbar></the-navbar>
  </div>
</template>

<script lang="ts" src="./TheProfile.ts"></script>
<style scoped src="./TheProfile.scss"></style>
