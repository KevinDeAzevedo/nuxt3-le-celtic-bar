<script setup>
// call the API here, use data const for use it
const runtimeConfig = useRuntimeConfig(); // variables access
// produits stars
const {
  data: starsData,
  pending: starsPending,
  error: starsError,
} = await useAsyncData(() =>
  $fetch(
    runtimeConfig.public.strapiUrl +
      `/api/categories?filters[name][$eq]=stars&populate=deep`
  )
);
</script>

<template>
  <div class="content-wrapper">
    <div class="centered-item">
      <h2>Nos produits stars</h2>
    </div>
    <div class="liste-produit">
      <div v-for="produit in starsData.data[0].attributes.produits.data" :key="produit.id" class="produit">
            <img
            :src="`${runtimeConfig.public.strapiUrl + produit.attributes.image.data.attributes.url}`"
              alt="image"
              class="image-produit"
            />
            <div class="info-produit">
              <p class="product">{{ produit.attributes.title }}</p>
              <p class="description">{{ produit.attributes.description }}</p>
              <p class="price">{{ produit.attributes.price }}€</p>
              <div class="separation"></div>
            </div>
          </div>
    </div>
    <div class="centered-item">
      <NuxtLink to="/carte"
        ><button class="primary-btn">Voir toute la carte</button></NuxtLink
      >
    </div>
  </div>
</template>

<style>
.content-wrapper {
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: 100px 0 100px 0;
}
.centered-item {
  align-self: center;
  text-align: center;
}
.liste-produit {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 40px 0;
  width: 100%;
  gap: 2%;
}
.produit {
  display: flex;
  column-gap: 10px;
  padding-bottom: 2%;
  width: 48%;
}

.produit p {
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

.info-produit {
  position: relative;
  width: 100%;
}

.price {
  position: absolute;
  top: 0;
  right: 0;
}
.image-produit {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 100%;
}
.separation {
  margin: 10px 0;
  border-bottom: 1px dashed grey;
}

@media screen and (max-width: 870px) {
  .produit {
    width: 100%;
  }
  .info-produit {
    position: relative;
    width: 100%;
  }
  .price {
    position: relative;
  }
}

@media screen and (max-width: 200px) {
  .produit {
    flex-direction: column;
  }
}
</style>
