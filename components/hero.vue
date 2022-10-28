<script setup lang="ts">
var heroImage = ref('/images/hero.jpeg');
</script>

<template>
  <div>
    <div class="hero">
      <div
        class="hero-image"
        :style="{ backgroundImage: 'url(' + heroImage + ')' }"
      ></div>
      <div class="hero-text">
        <h1>The brand new Nuxt 3</h1>
        <p>Very usefull blog style template based on Nuxt Content V2</p>
        <NuxtLink to="/contact"><button>Contact</button></NuxtLink>
        <NuxtLink to="/"><button>Catégories</button></NuxtLink>
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
  height: 500px;
  position: relative;
}

.hero-image {
  height: 100%;
  opacity: 50%;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: cover !important;
}

.hero-text {
  align-self: center;
  text-align: center;
  position: absolute;
  color: white;
}
</style>
