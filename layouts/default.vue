<template>
  <div>
    <slot />
  </div>
</template>

<style>
html,
body {
  width: 100%;
  margin: 0;
  padding: 0;
  margin: 0;
  left: 0;
  top: 0;
  font-size: 100%;
  font-family: 'helvetica', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  line-height: initial;
  color: black;
  scroll-behavior: smooth;
}

p,
h1,
h2,
h3 {
  margin: 0;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: rgb(10, 170, 106);
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  font-size: 12px;
  color: black;
  background-color: #ddd;
  text-align: center;
  cursor: pointer;
}

button:hover {
  background-color: rgb(10, 170, 106);
  color: white;
}

.link-button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  font-size: 12px;
  color: black;
  background-color: #ddd;
  text-align: center;
  cursor: pointer;
}

.link-button:hover {
  background-color: rgb(10, 170, 106);
  color: white;
}
</style>