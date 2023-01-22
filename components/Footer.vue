<script setup lang="ts"></script>

<template>
  <div class='footer-wrapper'>
    <img class='logo' src="~/assets/Logo-le-celtic-bar-sens-variante.svg" alt="Logo Le Celtic">
    <div class='lines'>
      <img src="~/assets/line-left.svg" alt="">
      <img src="~/assets/line-right.svg" alt="">
    </div>
  </div>
</template>

<style scoped>
.footer-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  max-width: 1200px;
}

.logo {
  width: 217px;
  height: 146px;
}

.lines {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
}

.lines img {
  max-width: 230px;
  width: 40%;
  height: auto;
}
</style>
