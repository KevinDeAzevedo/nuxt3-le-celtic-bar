<script setup lang="ts">
var heroImage = ref('/images/bouteilles-vin-hero.jpg');
</script>

<template>
  <div>
    <div class="hero">
      <div
        class="hero-image"
        :style="{ backgroundImage: 'url(' + heroImage + ')' }"
      ></div>
      <div class="hero-text">
        <h2>Nos Services</h2>
        <div class="content">
          <ServicesList />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-image: linear-gradient(rgb(58, 44, 45), rgba(0, 0, 0));
  width: 100%;
  height: 500px;
}

@media screen and (max-width: 800px) {
  .hero {
    height: 1000px;
  }
}

.hero-image {
  height: 100%;
  opacity: 50%;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: cover !important;
  background-attachment: fixed;
}

.hero-text {
  align-self: center;
  text-align: center;
  position: absolute;
  color: white;
}

.hero-text h2 {
}

.content {
  display: flex;
  align-items: center;
  max-width: 1200px;
  padding: 20px;
  gap: 12px;
  margin: 0;
}
</style>
