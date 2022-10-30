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
    <img class="logo" src="~/assets/logo-le-celtic-noir.svg" alt="Logo" />
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
  <div class="fixed-header-bottom-fix"></div>
</template>

<style>
.header {
  position: fixed;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background: #ffffff;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2);
}

.fixed-header-bottom-fix {
  height: 60px;
}

.logo {
  width: 150px;
  margin-left: 20px;
}

.links {
  display: flex;
  width: auto;
  margin-right: 20px;
  column-gap: 40px;
}

.links p {
  font-size: 20px;
}

.menu-btn {
  display: none;
  margin-right: 20px;
  cursor: pointer;
}

@media screen and (max-width: 960px) {
  .links p {
    font-size: 18px;
  }
}

@media screen and (max-width: 600px) {
  .links {
    opacity: 0%;
    right: -100%;
    position: absolute;
    flex-direction: column;
    align-self: flex-start;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 500px;
    top: 60px;
    margin-right: 0;
    row-gap: 40px;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(20px);
    overflow: hidden;

    transition: all 0.5s ease-out;
  }
  .isVisible {
    opacity: 100%;
    right: 0%;
  }
  .menu-btn {
    display: block;
  }
}
</style>