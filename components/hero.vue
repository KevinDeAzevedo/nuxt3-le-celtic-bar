<script setup lang="ts">
var heroImage = ref('/images/cafe-le-celtic-bar-sens-hero.jpg');
</script>

<template>
  <div>
    <div class="hero">
      <div
        class="hero-image"
        :style="{ backgroundImage: 'url(' + heroImage + ')' }"
      ></div>
      <div class="hero-text">
        <h1>Le Celtic bar à Sens</h1>
        <p>Ouvert et prêt à vous accueillir tous les jours de la semaine.</p>
        <NuxtLink to="/carte"><button>La carte</button></NuxtLink>
        <NuxtLink to="/contact"><button>Contact</button></NuxtLink>
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
