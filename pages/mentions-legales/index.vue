<script setup lang='ts'>
useHead({
  htmlAttrs: {
      lang: 'fr'
    }
})</script>

<template>
  <div class='container'>
    <div class='content mentions'>
      <LazyContentDoc path="/mentions-legales" />
    </div>
  </div>
  <Footer/>
</template>

<style>
.mentions img {
  width: 200px;
  padding-right: 30px;
  height: auto;
}
</style>