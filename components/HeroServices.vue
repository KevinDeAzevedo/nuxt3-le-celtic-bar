<script setup lang="ts">
var heroImage = ref('/images/bouteilles-vin-hero.webp');
</script>

<template>
  <div>
    <div class="hero">
      <div class="content">
        <h2>Nos Services</h2>
        <ServicesList />
      </div>
      <div
        class="hero-image"
        :style="{ backgroundImage: 'url(' + heroImage + ')' }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(rgb(58, 44, 45), rgba(0, 0, 0));
  width: 100%;
  height: auto;
}

@media screen and (max-width: 800px) {
}

.hero-image {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  opacity: 50%;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: cover !important;
  background-attachment: fixed;
}

.content {
  z-index: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
  text-align: center;
  padding: 20px;
  gap: 12px;
  margin: 30px 0;
}

.content h2{
  color: white;
}
</style>
