<script lang="ts" script></script>

<template>
  <div class="centerr">
    <div class="lds-dual-ring"></div>
  </div>
</template>

<style lang="scss">
.centerr {
  position: absolute;
  z-index: 1;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 55%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 32px;
  height: 32px;
  margin: 8px;
  border-radius: 50%;
  border: 4px solid var(--red);
  border-color: var(--red) transparent var(--red) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
