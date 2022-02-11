<script lang="ts">
export default {};
</script>

<template>
  <div class="profile-container">
    <div class="header">
      <div class="banner">
        <a routerLink="/find"><i class="fas fa-chevron-left"></i></a>
        <h2>Profile</h2>
      </div>
    </div>
    <div class="all">
      <div class="image-profile">
        <img src="../../assets/logos/profile-icon.png" alt="profile" />
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
      <router-link to="/landing">
        <button class="btn btn-secondary">Log Out</button>
      </router-link>
    </div>
    <app-navbar></app-navbar>
  </div>
</template>

<style lang="scss" scoped>
.profile-container {
  box-sizing: border-box;
  height: 100vh;
}

.header {
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #2c2c2e;
}

.banner {
  height: 80px;
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
    z-index: 2;
    position: absolute;
    top: 30px;
    margin: 0;
    padding: 0;
    font-size: 28px;
    color: var(--red);
    padding-left: 15px;
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

.image-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  img {
    width: 150px;
    height: 150px;
  }
  h2 {
    margin: 20px 0 5px 0;
  }
  p {
    margin: 0px;
    font-size: 14px;
  }
}

.profile-menu {
  width: 100%;
  margin-top: 55px;
  background-color: #2c2c2e;
  border-radius: 8px;
  hr {
    padding: 0;
    margin: 0;
    width: 100%;
    border-color: var(--dark-01);
    border-bottom: 20px;
  }
}

a {
  color: var(--white);
}

.section {
  padding: 0 13px 0 13px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 45px;
  i {
      color: var(--dark-01);
  }
}

.btn {
  color: #ff0000;
  margin-top: auto;
  margin-bottom: 80px;
  background-color: #1b1b1d;
}

.button {
  border: 5px;
  display: flex;
  flex-direction: column;
  height: 1000px;
}

.btn-secondary {
  box-shadow: inset 0px 0px 0px 1px var(--dark-01);
}
</style>
