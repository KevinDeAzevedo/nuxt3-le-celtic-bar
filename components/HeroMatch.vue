<script setup lang="ts">
var heroImage = ref('/images/match-foot-sens-celtic.jpg');
</script>

<template>
  <div>
    <div class="hero">
      <div
        class="hero-image"
        :style="{ backgroundImage: 'url(' + heroImage + ')' }"
      ></div>
      <div class="hero-text">
        <ContentDoc path="/match" />
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
    height: 300px;
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
</style>