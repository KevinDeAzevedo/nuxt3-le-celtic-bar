<script setup></script>

<template>
    <div class="white-bg" id='boissons'>
      <div class="content-zone">
        <div class="centered-item">
          <h2>Les boissons</h2>
        </div>
        <div class="liste-produit">
          <LazyContentList path="/produits/boissons" v-slot="{ list }">
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
      </div>
    </div>
    <div id='bieres' class="grey-bg">
      <div class="content-zone">
        <div class="centered-item">
          <h2>Les bières</h2>
        </div>
        <div class="liste-produit">
          <LazyContentList path="/produits/bieres" v-slot="{ list }">
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
      </div>
    </div>
    <div class="white-bg" id='vins'>
      <div class="content-zone">
        <div class="centered-item">
          <h2>Vins Et Spiritueux</h2>
        </div>
        <div class="liste-produit">
          <LazyContentList path="/produits/vins" v-slot="{ list }">
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
      </div>
    </div>
    <div class="grey-bg" id='cocktails'>
      <div class="content-zone">
        <div class="centered-item">
          <h2>Les cocktails</h2>
        </div>
        <div class="liste-produit">
          <LazyContentList path="/produits/cocktails" v-slot="{ list }">
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
      </div>
    </div>
    <div class="white-bg" id='sandwichs'>
      <div class="content-zone">
        <div class="centered-item">
          <h2>Les sandwichs</h2>
        </div>
        <div class="liste-produit">
          <LazyContentList path="/produits/sandwichs" v-slot="{ list }">
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
