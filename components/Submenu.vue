<script>
</script>

<template>
  <div class='sub-container'>
    <div class='sub-menu'>
      <div class='links'>
        <Nuxt-link to="#boissons"><p>Boissons</p></Nuxt-link>
        <nuxt-link to="#bieres"><p>Bières</p></nuxt-link>
        <nuxt-link to="#vins"><p>Vins</p></nuxt-link>
        <nuxt-link to="#cocktails"><p>Cocktails</p></nuxt-link>
        <nuxt-link to="#sandwichs"><p>Sandwichs</p></nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sub-container{
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: auto;
  padding: 20px;
  bottom: 0;
  z-index: 99;
}

.sub-menu {
  width: 900px;
  min-height: 60px;
  background: #FEEFDD;
  border: 1px solid #FFCF94;
  border-radius: 45px;
}

.sub-menu .links {
  display: flex;
  justify-content: space-evenly;
}

@media screen and (max-width: 590px) {
  .sub-menu .links p{
  font-size: 3vw;
}
}
</style>