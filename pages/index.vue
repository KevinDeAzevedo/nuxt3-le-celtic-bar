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
          <div class='content-item-photo'>
            <img src="/images/Jose-du-bar-le-celtic.png" alt="Photo du patron derrière son bar servant un cocktail" />
          </div>
        </div>
      </div>
    </div>
    <HeroServices />
    <div class="container">
      <StarsList />
    </div>
    <HeroMatch />
    <div class="container">
      <AvisList />
    </div>
    <Footer />
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
  margin: 100px 0 100px 0;
}

.content-item {
  width: 100%;
}

.content-item-photo {
  margin: auto;
  max-width: 400px;
}

.content-item-photo img {
  border-radius: 40px;
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
