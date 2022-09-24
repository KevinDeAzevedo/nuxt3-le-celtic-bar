<script setup lang="ts">
var heroImage = ref('assets/maman.jpeg');
</script>

<template>
  <div>
    <div class="hero">
      <div
        class="hero-image"
        :style="{ backgroundImage: 'url(' + heroImage + ')' }"
      ></div>
      <div class="hero-text">
        <div class="content"><h2>Titre H2</h2></div>
        <div class="content">
          <div class="content-item card">
            <h3>Titre H3</h3>
            <p>
              Profitez de places gratuites pour garer votre véhicule, sur toute
              l’ile d’Yonne.
            </p>
          </div>
          <div class="content-item card">
            <h3>Titre H3</h3>
            <p>Demandez au comptoir l’accès à internet haut débit !</p>
          </div>
          <div class="content-item card">
            <h3>Titre H3</h3>
            <p>Prenez place seul ou à plusieurs, à la fraîche en terrasse.</p>
          </div>
          <div class="content-item card">
            <h3>Titre H3</h3>
            <p>
              Vivez de moments forts, et regardez les meilleurs matchs en cours.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-image: linear-gradient(rgb(58, 44, 45), rgba(0, 0, 0));
  width: 100%;
  height: 400px;
}

@media screen and (max-width: 800px) {
  .hero {
    height: 900px;
  }
}

.hero-image {
  height: 100%;
  opacity: 50%;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: cover !important;
  background-attachment: fixed;
}

.hero-text {
  align-self: center;
  text-align: center;
  position: absolute;
  color: white;
}

.card {
  background-color: white;
  color: black;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.card p {
  padding: 30px;
}
</style>