<script setup lang="ts">
const heroImage = ref('/images/cafe-le-celtic-bar-sens-hero.jpg');
</script>

<template>
  <div>
    <div class="hero">
      <div
        class="hero-image"
        :style="{ backgroundImage: 'url(' + heroImage + ')' }"
      ></div>
      <div class="hero-text">
        <div class='arabesque'><img src="~/assets/arabesque01.svg" alt="Illustration arabesque"></div>
        <div class="title">
          <h1>Le Celtic bar à Sens</h1>
        </div>
        <p>Ouvert et prêt à vous accueillir tous les jours de la semaine.</p>
        <div class='arabesque'><img src="~/assets/arabesque02.svg" alt="Illustration arabesque"></div>
        <div class='cta-butons'>
          <NuxtLink to="/carte"><button class='secondary-btn'>La carte</button></NuxtLink>
          <NuxtLink to="/contact"><button class='primary-btn'>Contact</button></NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.hero {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #170D0D;
  height: 700px;
  position: relative;
}

.hero-image {
  height: 100%;
  opacity: 30%;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: cover !important;
}

.hero-text {
  margin-top: 80px;
  align-self: center;
  text-align: center;
  position: absolute;
  color: white;
}

.arabesque img {
  width: 100px;
  height: 46px;
}

.cta-butons {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.cta-butons button{
  margin: 10px;
}

@media screen and (max-width: 400px) {
  .title h1 {
  font-size: 10vw;
}
  .cta-butons {
  flex-direction: column;
}
}

</style>
