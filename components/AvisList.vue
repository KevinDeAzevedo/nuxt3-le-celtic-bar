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
        <div class="avatar">
          <p>
          <strong>{{ Avis.score }}</strong>
          </p>
        <img :src="`/images/avatars/${Avis.image}`" alt="avatar"/>
        </div>
        <h3>{{ Avis.name }}</h3>
        <p>{{ Avis.text }}</p>
      </div>
    </div>
    <div>
      <nuxt-link to="https://g.page/r/CevH0Jv999vkEBM/review" target='_blank'><button>Écrire un avis</button></nuxt-link>
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
  flex-wrap: wrap;
  width: 100%;
  gap: 2%;
}
.avis-card {
  width: 28%;
  padding: 2%;
  margin-bottom: 2%;
  background-color: white;
  color: black;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.avatar {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 100%;
}

.avatar p {
  position: absolute;
  font-size: 12px;
}

@media screen and (max-width: 800px) {
  .content-items {
    flex-direction: row;
  }
  .avis-card {
  width: 41%;
  padding: 4%;
}
}
</style>
