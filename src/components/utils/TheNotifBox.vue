<script lang="ts" setup>
import { reactive } from "vue";

const props = defineProps({
  to: String,
  title: String,
  msg: String,
});
</script>

<template>
  <div class="notif-box">
    <p id="p1">{{ props.title }}</p>
    <p id="p2">{{ props.msg }}</p>
    <hr />
    <router-link class="button" tag="div" :to="{ path: '/' + props.to }"
      ><button>OK</button></router-link
    >
  </div>
</template>

<style lang="scss">
.notif-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 100%;
  background-color: var(--dark-05);
  border-radius: 15px;
  hr {
    padding: 0;
    margin: 0;
    width: 100%;
    border-color: var(--dark-01);
    border-bottom: 20px;
  }
  #p2 {
    padding: 0;
    color: #fff;
    max-width: 300px;
    width: 100%;
    text-align: center;
    font-weight: 500;
    font-size: 1.1em;
  }
  #p1 {
    padding: 0;
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: 700;
    font-size: 1.5em;
  }
  button {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    color: #fff;
    font-weight: 700;
    height: 50px;
    width: 100%;
    font-size: 1.1em;
    letter-spacing: 1.1px;
  }
}
</style>
