<script setup lang="ts"></script>

<template>
<router-view></router-view>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
:root {
  --red: #c01d13;
  --dark-01: #8e8e93;
  --dark-02: #636366;
  --dark-03: #48484a;
  --dark-04: #3a3a4c;
  --dark-05: #2c2c2e;
  --dark-06: #1c1c1e;
  --white: #fff;
  --green: #32d74b;
  --blue: #0a84ff;
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial;
  background-color: var(--dark-06);
  color: var(--white);
  height: 100vh;
}

.container {
  display: flex;
  box-sizing: border-box;
  padding: 30px;
  flex-flow: nowrap column;
  justify-content: space-between;
  height: 100vh;
}

/* Label */

label {
  color: var(--dark-01);
  font-size: 15px;
  margin-left: 5px;
}

/* TextFields */

.text-field {
  background-color: var(--dark-06);
  padding: 15px;
  width: 100%;
  border: solid 1px var(--dark-01);
  border-radius: 5px;
  margin: 5px 0;
  outline: none;
  color: var(--dark-01);
  letter-spacing: -0.24px;
  font-size: 20px;
  transition: all 200ms ease-in-out;
  &:focus-within {
    padding: 20px;
    border: 1px solid white;
  }
}

/* Buttons */

.btn {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  letter-spacing: -0.24px;
  border-radius: 8px;
  width: 100%;
  padding: 13px 0;
  outline: none;
  border: none;
  color: var(--white);
  margin: 5px 0;
  transition: all 100ms ease-in;
}

.btn-primary {
  background-color: var(--red);
}

.btn-secondary {
  background-color: var(--dark-06);
  box-shadow: inset 0px 0px 0px 2px var(--white);
}

/* Title */

.title {
  color: var(--red);
  font-weight: 600;
  font-size: 36px;
  letter-spacing: -0.24px;
}

.spaced-title {
  font-size: 28px;
  letter-spacing: 1px;
  font-weight: bold;
}

/* Separator */

.hrr {
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: 0.5;
  &:before {
    content: "";
    background: var(--dark-01);
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
  }
  &:after {
    content: "Or";
    position: relative;
    display: inline-block;
    color: black;
    padding: 0 0.5em;
    line-height: 1.5em;
    color: var(--dark-01);
    background-color: var(--dark-06);
  }
}

a {
  text-decoration: none;
}
</style>
