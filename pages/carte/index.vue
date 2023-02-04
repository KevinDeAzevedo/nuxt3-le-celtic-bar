<script setup lang="ts">
var heroImage = ref('/images/cafe-le-celtic-bar-sens-hero.webp');

useHead({
  htmlAttrs: {
      lang: 'fr'
    },
  title: 'Le Celtic bar – La Carte des boissons',
  meta: [
    { name: 'description', content: `Rejoignez-nous pour une expérience culinaire unique au Celtic Bar de Sens. Notre carte de boissons variée comprend des cocktails classiques, des bières locales et plus encore pour convenir à tous les goûts.` }
  ]
})
</script>

<template>
  <div>
    <div class="tiny-hero">
      <div
        class="tiny-hero-image"
        :style="{ backgroundImage: 'url(' + heroImage + ')' }"
      ></div>
      <div class="tiny-hero-text">
        <div class='arabesque'><img src="~/assets/arabesque01.svg" alt="Illustration arabesque"></div>
        <h1>La Carte</h1>
        <div class='arabesque'><img src="~/assets/arabesque02.svg" alt="Illustration arabesque"></div>
      </div>
    </div>
    <AllList />
    <Submenu />
    <Footer />
    <div class='offset-for-submenu'></div>
  </div>
</template>

<style>
.tiny-hero {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #170D0D;
  height: 500px;
  position: relative;
}
.tiny-hero-image {
  height: 100%;
  opacity: 30%;
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
  margin-top: 80px;
}

.tiny-hero-text h1{
  font-size: 3.5rem;
}

.offset-for-submenu {
  width: 100%;
  height: 150px;
}
</style>
