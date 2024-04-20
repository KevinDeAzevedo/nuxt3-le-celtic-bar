<script setup></script>

<template>
  <div class="content-wrapper">
    <div class="centered-item">
      <h2>Nos produits stars</h2>
    </div>
    <div class="liste-produit">
      <LazyContentList path="/produits-stars" v-slot="{ list }">
        <div v-for="produit in list" :key="produit._path" class="produit">
          <img
            :src="`/images/produits/${produit.image}`"
            alt="image"
            class="image-produit"
          />
          <div class="info-produit">
            <p class="product">{{ produit.title }}</p>
            <p class="description">{{ produit.description }}</p>
            <p class="price">{{ produit.price }}€</p>
            <div class="separation"></div>
          </div>
        </div>
      </LazyContentList>
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
