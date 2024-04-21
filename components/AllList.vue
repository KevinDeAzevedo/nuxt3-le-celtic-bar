<script setup>
// call the API here, use data const for use it
const runtimeConfig = useRuntimeConfig(); // variables access
// Boissons
const {
  data: boissonsData,
  pending: boissonsPending,
  error: boissonsError,
} = await useAsyncData(() =>
  $fetch(
    runtimeConfig.public.strapiUrl +
      `/api/categories?filters[name][$eq]=boissons&populate=deep`
  )
);
// Bieres
const {
  data: bieresData,
  pending: bieresPending,
  error: bieresError,
} = await useAsyncData(() =>
  $fetch(
    runtimeConfig.public.strapiUrl +
      `/api/categories?filters[name][$eq]=bieres&populate=deep`
  )
);
// Vins
const {
  data: vinsData,
  pending: vinsPending,
  error: vinsError,
} = await useAsyncData(() =>
  $fetch(
    runtimeConfig.public.strapiUrl +
      `/api/categories?filters[name][$eq]=vins&populate=deep`
  )
);
// Cocktails
const {
  data: cocktailsData,
  pending: cocktailsPending,
  error: cocktailsError,
} = await useAsyncData(() =>
  $fetch(
    runtimeConfig.public.strapiUrl +
      `/api/categories?filters[name][$eq]=cocktails&populate=deep`
  )
);
// Sandwichs
const {
  data: sandwichsData,
  pending: sandwichsPending,
  error: sandwichsError,
} = await useAsyncData(() =>
  $fetch(
    runtimeConfig.public.strapiUrl +
      `/api/categories?filters[name][$eq]=sandwichs&populate=deep`
  )
);
</script>

<template>
  <div class="white-bg" id="boissons">
    <div class="content-zone">
      <div class="centered-item">
        <h2>Les boissons</h2>
      </div>
      <div class="liste-produit">
          <div v-for="produit in boissonsData.data[0].attributes.produits.data" :key="produit.id" class="produit">
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
    </div>
  </div>
  <div id="bieres" class="grey-bg">
    <div class="content-zone">
      <div class="centered-item">
        <h2>Les bières</h2>
      </div>
      <div class="liste-produit">
        <div v-for="produit in bieresData.data[0].attributes.produits.data" :key="produit.id" class="produit">
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
    </div>
  </div>
  <div class="white-bg" id="vins">
    <div class="content-zone">
      <div class="centered-item">
        <h2>Vins Et Spiritueux</h2>
      </div>
      <div class="liste-produit">
        <div v-for="produit in vinsData.data[0].attributes.produits.data" :key="produit.id" class="produit">
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
    </div>
  </div>
  <div class="grey-bg" id="cocktails">
    <div class="content-zone">
      <div class="centered-item">
        <h2>Les cocktails</h2>
      </div>
      <div class="liste-produit">
        <div v-for="produit in cocktailsData.data[0].attributes.produits.data" :key="produit.id" class="produit">
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
    </div>
  </div>
  <div class="white-bg" id="sandwichs">
    <div class="content-zone">
      <div class="centered-item">
        <h2>Les sandwichs</h2>
      </div>
      <div class="liste-produit">
        <div v-for="produit in sandwichsData.data[0].attributes.produits.data" :key="produit.id" class="produit">
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
    </div>
  </div>
</template>

<style scoped>
.white-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
}
.grey-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgb(240, 240, 240);
}
.content-zone {
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: 100px 0 100px 0;
  padding: 0 20px 0 20px;
}
.centered-item {
  align-self: center;
  text-align: center;
}

.grey-section {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: gray;
  width: 100%;
  height: auto;
  position: relative;
}
</style>
