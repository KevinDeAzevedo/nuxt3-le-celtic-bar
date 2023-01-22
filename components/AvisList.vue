<script setup>
const { data: AvisList } = useAsyncData('AvisList', () => {
  return queryContent('/avis').find();
});
</script>

<template>
  <div class="content">
      <h2>Les avis de nos clients</h2>
    <div class="content-items">
      <div v-for="Avis in AvisList" :key="Avis._path" class="avis-card">
        <img class='bubble' src="~/assets/bubble-speech.svg" alt="Illustration de bulle de dialogue">
        <p>{{ Avis.text }}</p>
        <div class='baseline'>
          <p class='scoring'>{{ Avis.score }}/5</p>
          <p class='name'>{{ Avis.name }}</p>
        </div>
      </div>
    </div>
    <div>
      <nuxt-link to="https://g.page/r/CevH0Jv999vkEBM/review" target='_blank'><button class='primary-btn'>Écrire un avis</button></nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  width: 1200px;
}

.content-items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 30px;
}
.avis-card {
  position: relative;
  width: 30%;
  padding: 30px;
  margin-bottom: 4%;
  background-color: white;
  color: black;
  border: 1px solid #D7D7D7;
  border-radius: 40px;
}

.avis-card p{
  margin: 3% 0;
}

.baseline{
  display: flex;
  justify-content: space-between;
}

.bubble {
  position: absolute;
  top: -10px;
  left: -10px;
  width: 34px;
  height: 40px;
}

@media screen and (max-width: 800px) {
  .avis-card {
    width: 48%;
  }
}

@media screen and (max-width: 600px) {
  .avis-card {
    width: 100%;
  }
}
</style>
