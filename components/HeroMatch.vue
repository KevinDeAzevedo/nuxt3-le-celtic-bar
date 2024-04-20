<script setup lang="ts">
var heroImage = ref('/images/match-foot-sens-celtic.webp');
</script>

<template>
  <div>
    <div class="hero">
      <div class='content'>
        <LazyContentDoc path="/match" />
      </div>
      <div
        class="hero-image"
        :style="{ backgroundImage: 'url(' + heroImage + ')' }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #170D0D;
  width: 100%;
  height: auto;
}

.hero-image {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  opacity: 20%;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: cover !important;
  background-attachment: fixed;
}

.content {
  z-index: 2;
  max-width: 800px;
  text-align: center;
  color: white;
}

</style>