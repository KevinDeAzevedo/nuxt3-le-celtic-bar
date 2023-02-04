<script>
export default {
  data() {
    return {
      visibleMenu: false,
    };
  },
  methods: {
    showMenu() {
      if (this.visibleMenu == false) {
        return (this.visibleMenu = true);
      }
      return (this.visibleMenu = false);
    },
  },
};
</script>
<template>
  <div class="header">
    <div class="header--elements">
      <!--<NuxtLink to="/"><img class="logo" src="~/assets/logo-le-celtic-noir.svg" alt="Logo" /></NuxtLink>-->
      <div class='logo-container'><NuxtLink to="/"><img src="~/assets/logo-le-celtic-noir.svg" alt="Logo" class='logo'/></NuxtLink></div>
    <div class="links" :class="{ isVisible: visibleMenu }">
      <NuxtLink to="/" v-on:click="showMenu()"><p>Accueil</p></NuxtLink>
      <NuxtLink to="/carte" v-on:click="showMenu()"><p>La carte</p></NuxtLink>
      <NuxtLink to="/contact" v-on:click="showMenu()"><p>Contact</p></NuxtLink>
    </div>
    <div class="menu-btn" v-on:click="showMenu()">
      <img v-if="!visibleMenu" src="~/assets/burger-btn.svg" alt="Menu" />
      <img v-else="visibleMenu" src="~/assets/close.svg" alt="Fermer" />
    </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  z-index: 99;
  width: 100%;
  height: auto;
  margin-top: 40px;
  display: flex;
  justify-content: center;
}

.header--elements {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 800px;
  width: 100%;
  height: auto;
  margin: 0 20px 0 20px;
  padding: 0 15px 0 5px;
  background-color: white;
  box-shadow: 0 6px 42px 0 rgba(42,17,17,0.24);
  border-radius: 100px;
}

.logo-container {
  display: flex;
  align-items: center;
  padding-left: 15px;
}

.logo {
  width: 200px;
  height: auto;
}

.links {
  display: flex;
  width: auto;
  margin-right: 20px;
  column-gap: 3rem;
}

.links p {
  font-size: 20px;
}

.menu-btn {
  display: none;
  margin-right: 20px;
  cursor: pointer;
}

.menu-btn img {
  width: 15px;
  height: auto;
}

@media screen and (max-width: 590px) {
  .header {
  height: 60px;
  margin-top: 25px;
  }

  .logo {
  width: 100%;
  height: auto;
  }

  .links {
    opacity: 0%;
    margin-top: -100%;
    margin-left: 9%;
    width: 70%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    top: 75px;
    row-gap: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 13px 21px -2px rgba(0,0,0,0.07);
    border-radius: 24px;
    backdrop-filter: blur(10px);
    overflow: hidden;
    transition: all 0.2s ease-out;
  }
  .isVisible {
    opacity: 100%;
    margin-top: 0;
  }
  .menu-btn {
    display: block;
  }
}
</style>