<script setup lang="ts">
</script>

<template>
  <div>
    <Hero />
    <div class="container">
      <div class="content">
        <div class="content-item">
          <ContentDoc path="/intro" />
        </div>
        <div class="content-item">
          <img src="/images/terrasse.jpeg" alt="Photo de terrasse" />
        </div>
      </div>
    </div>
    <HeroParallax />
    <div class="container">
      <StarsList />
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.content {
  display: flex;
  align-items: center;
  max-width: 1200px;
  padding: 20px;
  gap: 12px;
}

.content-item {
  width: 100%;
}

@media screen and (max-width: 800px) {
  .content {
    max-width: 100%;
    flex-direction: column;
  }
}

img {
  width: 100%;
  height: auto;
}
</style>
