<script setup>
// const { data: ServicesList } = useAsyncData('ServicesList', () => {
//   return queryContent('/services').find();
// });

// call the API here, use data const for use it
const runtimeConfig = useRuntimeConfig() // variables access
const { data, pending, error, refresh } = await useAsyncData(
  () => $fetch(runtimeConfig.public.strapiUrl + `/api/services?populate=icon`)
)

</script>

<template>
  <div class='card-list'>
    <div v-for="Service in data.data" :key="Service.id" class="card">
    <img :src="`${runtimeConfig.public.strapiUrl + Service.attributes.icon.data.attributes.url}`" alt="icone" />
    <h3>
      {{ Service.attributes.title }}
    </h3>
    <p>{{ Service.attributes.text }}</p>
  </div>
  </div>
</template>

<style>

.card-list {
  display: flex;
  column-gap: 1rem;
  margin: 10px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  width: 100%;
  text-align: center;
  background-color: white;
  color: black;
  border-radius: 40px;
}

.card img {
  width: 60px;
  height: 60px;
}

@media screen and (max-width: 800px) {
  .card-list {
    display: flex;
    flex-direction: column;
    column-gap: 0;
    row-gap: 1rem;
  }
  .card {
    padding: 10px 20px;
  }
}

</style>