<script lang="ts">
export default {};
</script>

<template>
  <div class="navbar">
    <router-link active-class="active-link" class="nav-link" to="/to-watch">
      <i class="fas fa-list-ul fa-2x" value="to-watch"></i>To watch
    </router-link>
    <router-link active-class="active-link" class="nav-link" to="/watched">
      <i class="fas fa-star fa-2x" value="watched"></i>Watched
    </router-link>
    <router-link active-class="active-link" class="nav-link" to="/find">
      <i class="fas fa-search fa-2x" value="find"></i>Find
    </router-link>
    <router-link active-class="active-link" class="nav-link" to="/profile">
      <i class="fas fa-user fa-2x" value="profile"></i>Profile
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 49px;
  margin-top: 15px;
  backdrop-filter: blur(15px);
  display: flex;
  overflow-x: auto;
}

.nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-width: 50px;
  overflow: hidden;
  white-space: nowrap;
  color: var(--dark-01);
  text-decoration: none;
  font-weight: 600;
  font-size: 10px;
  i {
    font-size: 2.5em;
  }
  img {
    margin-bottom: 2px;
  }
}

.active-link {
  color: var(--red);
}
</style>
