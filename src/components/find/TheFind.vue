<script lang="ts" setup>
import { reactive } from "vue";
import TheNavBar from "../navbar/TheNavBar.vue";
import global from "../../composables/store";
import ListMovie from "./ListMovies.vue"

const data = reactive({
  showingMovies: "Movies",
  searching: " ",
  isTyping: false,
});

const { store, search } = global;

function toggleMovies(_ev: Event): void {
  if (data.showingMovies !== (_ev.target as HTMLInputElement).value) {
    data.showingMovies = data.showingMovies == "Movies" ? "TV Shows" : "Movies";
  }
}

function onKey(event: Event): void {
  data.isTyping = data.searching.length != 0;
  if (data.searching.length > 3) {
    search(data.searching);
  }
}

function Close(): void {
  data.searching = " ";
  data.isTyping = false;
  search(data.searching)
}
</script>

<template>
  <div class="find-container">
    <div class="header">
      <div class="search-box">
        <img src="../../assets/logos/search.svg" alt="search" />
        <!-- fonction qui écoute les entrées de clavier et change l'état de la variable -->
        <input
          class="search-txt"
          @keyup="onKey($event)"
          v-model="data.searching"
          type="text"
          placeholder="Search"
        />
        <!-- si la personne est entrain d'écrire, la croix s'affiche -->
        <img
          v-if="data.isTyping === true"
          @click="Close()"
          class="close"
          src="../../assets/logos/close.png"
          alt="close"
        />
      </div>
      <div class="switch-menu">
        <button
          class="switch-btn"
          @click="toggleMovies($event)"
          :class="data.showingMovies == 'Movies' ? 'active-button' : ''"
          value="Movies"
        >
          Movies
        </button>
        <button
          class="switch-btn"
          @click="toggleMovies($event)"
          :class="data.showingMovies == 'TV Shows' ? 'active-button' : ''"
          value="TV Shows"
        >
          TV Shows
        </button>
      </div>
    </div>
    <div class="all">
    <ListMovie v-for="movie in store.fmovies" :movie="movie" v-if="data.showingMovies === 'Movies'" />
      <!-- <app-show-list-find
        [shows]="shows"
        *ngIf="this.showingMovies === 'TV Shows'"
      ></app-show-list-find> -->
    </div>
    <TheNavBar />
  </div>
</template>

<style lang="scss" scoped>
.all {
  margin-top: 60px;
  padding: 60px 30px 65px 30px;
}

.find-container {
  box-sizing: border-box;
  height: 100%;
}

.header {
  position: fixed;
  width: 100%;
  padding: 10px 30px;
  top: 0;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
}

// search bar
.search-box {
  height: 43px;
  padding: 7px;
  background: var(--dark-05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
}

.search-txt {
  background: var(--dark-05);
  font-size: 14px;
  font-weight: 100;
  margin: 0 12px 0 12px;
  width: 100%;
  border: none;
  outline: none;
  color: var(--white);
}

button,
.close {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

// switch menu
.switch-menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: var(--dark-05);
  border-radius: 9px;
  margin: 30px 0 0 0;
}

// switch buttons
.switch-btn {
  height: 35px;
  font-size: 15px;
  font-weight: 400;
  flex: 1;
}

.active-button {
  background-color: #585858;
  border-radius: 7px;
}
</style>
