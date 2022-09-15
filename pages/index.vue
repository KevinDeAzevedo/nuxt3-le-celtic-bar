<script setup lang="ts">
import HeroParallax1 from '../components/hero-parallax.vue';
</script>

<template>
  <div>
    <Hero />
    <div class="container">
      <div class="content">
        <div class="content-item">
          <h2>Titre H2</h2>
          <h3>Sous titre H3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <NuxtLink to="/a-propos"><button>À propos</button></NuxtLink>
        </div>
        <div class="content-item">
          <img src="~/assets/terrasse.jpeg" alt="Photo de terrasse" />
        </div>
      </div>
    </div>
    <HeroParallax />
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.content {
  display: flex;
  max-width: 1200px;
  padding: 20px;
  gap: 12px;
}

.content-item {
  width: 100%;
}

@media screen and (max-width: 800px) {
  .content {
    max-width: 100%;
    flex-direction: column;
  }
}

img {
  width: 100%;
  height: auto;
}
</style>
