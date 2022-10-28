<script setup>
const { data: ServicesList } = useAsyncData('ServicesList', () => {
  return queryContent('/nos_services').find();
});
</script>

<template>
  <div v-for="Service in ServicesList" :key="Service._path" class="card">
    <img :src="`/images/${Service.icon}`" alt="icone" />
    <h3>
      {{ Service.title }}
    </h3>
    <p>{{ Service.description }}</p>
  </div>
</template>

<style>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 200px;
  background-color: white;
  color: black;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.card p {
  padding: 20px;
}

.card img {
  max-width: 100px;
  max-height: 100px;
}
</style>