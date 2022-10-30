<script setup></script>

<template>
  <div class="content">
    <div class="centered-title">
      <h2>Nos produits stars</h2>
    </div>
    <div class="liste-produit">
      <ContentList path="/produits-stars" v-slot="{ list }">
      <div v-for="produit in list" :key="produit._path" class="produit">
        <img :src="`/images/produits/${produit.image}`" alt="image" class="image-produit"/>
        <div class="info-produit">
          <h2>{{ produit.title }}</h2>
        <p>{{ produit.description }}</p>
        <div class="color"></div>
        </div>
        <p>
          <strong>{{ produit.price }}€</strong>
        </p>
      </div>
    </ContentList>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  width: 1200px;
}
.centered-title {
  align-self: center;
  text-align: center;
}
.liste-produit {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  gap: 2%;
}
.produit {
  display: flex;
  column-gap: 10px;
  padding-bottom: 2%;
  width: 48%;
}
@media screen and (max-width: 800px) {
  .produit {
    width: 100%;
  }
}
.info-produit {
  width: 100%;
}
.image-produit {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 100%;
}
.color {
  border-bottom: 1px dashed grey;
}
</style>
