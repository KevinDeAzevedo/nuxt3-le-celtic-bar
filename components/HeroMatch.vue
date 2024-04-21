<script setup lang="ts">
var heroImage = ref('/images/match-foot-sens-celtic.webp');

// render markdown
import markdownit from 'markdown-it'
const md = markdownit()

// call the API here, use data const for use it
const runtimeConfig = useRuntimeConfig() // variables access
const { data, pending, error, refresh } = await useAsyncData(
  () => $fetch(runtimeConfig.public.strapiUrl + `/api/home`)
)

</script>

<template>
  <div>
    <div class="hero">
      <div class='content flex-col'>
        <div v-html="md.render(data.data.attributes.match)"></div>
        <button class='secondary-btn'>
          <a target='_blank' href="https://www.google.com/maps/place/Le+Celtic+Bar/@48.1974739,3.2726454,17z/data=!3m2!4b1!5s0x47ef101c71583c83:0xd37053c0adc6e89c!4m5!3m4!1s0x47ef101c74fde741:0xe4dbf7fd9bd0c7eb!8m2!3d48.1974703!4d3.2748341?coh=164777&entry=tt&shorturl=1">Aller voir un match</a>
        </button>
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
  background-color: #170D0D;
  width: 100%;
  height: auto;
}

.hero-image {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  opacity: 20%;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: cover !important;
  background-attachment: fixed;
}

.content {
  z-index: 2;
  max-width: 800px;
  text-align: center;
  color: white;
}

</style>