<script setup lang='ts'>
useHead({
  htmlAttrs: {
      lang: 'fr'
    },
  title: 'Le Celtic Bar - Mentions légales',
  meta: [
    { name: 'description', content: `Mentions légales` }
  ]
})

// render markdown
import markdownit from 'markdown-it'
const md = markdownit()
// call the API here, use data const for use it
const runtimeConfig = useRuntimeConfig() // variables access
const { data, pending, error, refresh } = await useAsyncData(
  () => $fetch(runtimeConfig.public.strapiUrl + `/api/legal`)
)
</script>

<template>
  <div class='container'>
    <div class='content mentions'>
      <div class='legal' v-html="md.render(data.data.attributes.text)"></div>
    </div>
  </div>
  <Footer/>
</template>

<style>
.legal {
  padding-top: 5rem;
}
</style>