<script setup lang="ts">
var heroImage = ref('/images/cafe-le-celtic-bar-sens-hero.jpg');
</script>

<template>
  <div>
    <div class="tiny-hero">
      <div
        class="tiny-hero-image"
        :style="{ backgroundImage: 'url(' + heroImage + ')' }"
      ></div>
      <div class="tiny-hero-text">
        <h1>La Carte</h1>
      </div>
    </div>
    <AllList />
    <Footer />
  </div>
</template>

<style scoped>
.tiny-hero {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-image: linear-gradient(rgb(58, 44, 45), rgba(0, 0, 0));
  height: 300px;
  position: relative;
}
.tiny-hero-image {
  height: 100%;
  opacity: 50%;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: cover !important;
}

.tiny-hero-text {
  align-self: center;
  text-align: center;
  position: absolute;
  color: white;
}
</style>
