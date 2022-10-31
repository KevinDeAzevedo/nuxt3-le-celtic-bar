<script setup></script>

<template>
    <div class="white-bg">
      <div class="content-zone">
        <div class="centered-item">
          <h2>Les boissons</h2>
        </div>
        <div class="liste-produit">
          <ContentList path="/produits/boissons" v-slot="{ list }">
            <div v-for="produit in list" :key="produit._path" class="produit">
              <img
                :src="`/images/produits/${produit.image}`"
                alt="image"
                class="image-produit"
              />
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
    </div>
    <div class="grey-bg">
      <div class="content-zone">
        <div class="centered-item">
          <h2>Les bières</h2>
        </div>
        <div class="liste-produit">
          <ContentList path="/produits/bieres" v-slot="{ list }">
            <div v-for="produit in list" :key="produit._path" class="produit">
              <img
                :src="`/images/produits/${produit.image}`"
                alt="image"
                class="image-produit"
              />
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
    </div>
    <div class="white-bg">
      <div class="content-zone">
        <div class="centered-item">
          <h2>Les cocktails</h2>
        </div>
        <div class="liste-produit">
          <ContentList path="/produits/cocktails" v-slot="{ list }">
            <div v-for="produit in list" :key="produit._path" class="produit">
              <img
                :src="`/images/produits/${produit.image}`"
                alt="image"
                class="image-produit"
              />
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
    </div>
    <div class="grey-bg">
      <div class="content-zone">
        <div class="centered-item">
          <h2>Les sandwichs</h2>
        </div>
        <div class="liste-produit">
          <ContentList path="/produits/sandwichs" v-slot="{ list }">
            <div v-for="produit in list" :key="produit._path" class="produit">
              <img
                :src="`/images/produits/${produit.image}`"
                alt="image"
                class="image-produit"
              />
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
.liste-produit {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  gap: 2%;
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
