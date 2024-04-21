<script setup lang="ts">

// render markdown
import markdownit from 'markdown-it'
const md = markdownit()

useHead({
  htmlAttrs: {
      lang: 'fr'
    },
  title: 'Le Celtic Bar - Entre les deux ponts à Sens',
  meta: [
    { name: 'description', content: `Découvrez l'ambiance chaleureuse et les boissons exceptionnelles de notre bar situé en plein coeur de Sens. Rejoignez-nous pour passer une soirée mémorable avec des amis ou en solo.` }
  ]
})

// call the API here, use data const for use it
const runtimeConfig = useRuntimeConfig() // variables access
const { data, pending, error, refresh } = await useAsyncData(
  () => $fetch(runtimeConfig.public.strapiUrl + `/api/home`)
)


</script>

<template>
  <div>
    <Hero />
    <div class="container">
      <div class="content">
        <div class="content-item">
          <div v-html="md.render(data.data.attributes.intro)"></div>
          <button class='secondary-btn'>
          <a target='_blank' href="https://www.google.com/maps/place/Le+Celtic+Bar/@48.1974739,3.2726454,17z/data=!3m2!4b1!5s0x47ef101c71583c83:0xd37053c0adc6e89c!4m5!3m4!1s0x47ef101c74fde741:0xe4dbf7fd9bd0c7eb!8m2!3d48.1974703!4d3.2748341?coh=164777&entry=tt&shorturl=1">Itinéraire</a>
        </button>
      </div>
        <div class="content-item">
          <div class='content-item-photo'>
            <img src="/images/Jose-du-bar-le-celtic.webp" alt="Photo du patron derrière son bar servant un cocktail" />
          </div>
        </div>
      </div>
    </div>
    <HeroServices />
    <div class="container">
      <StarsList />
    </div>
    <HeroMatch />
    <div class="container">
      <AvisList />
    </div>
    <Footer />
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
  align-items: center;
  max-width: 1200px;
  padding: 20px;
  gap: 12px;
  margin: 100px 0 100px 0;
}

.content-item {
  width: 100%;
}

.content-item-photo {
  margin: auto;
  max-width: 400px;
}

.content-item-photo img {
  border-radius: 40px;
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
