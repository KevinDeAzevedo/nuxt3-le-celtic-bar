<script setup>
const { data: ServicesList } = useAsyncData('ServicesList', () => {
  return queryContent('/nos_services').find();
});
</script>

<template>
  <div v-for="Service in ServicesList" :key="Service._path" class="card">
    <img :src="`/assets/${Service.icon}`" alt="icone" />
    <h3>
      {{ Service.title }}
    </h3>
    {{ Service.description }}
  </div>
</template>

<style>
.card {
  width: auto;
  min-height: 200px;
  background-color: white;
  color: black;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.card p {
  padding: 30px;
}
</style>
