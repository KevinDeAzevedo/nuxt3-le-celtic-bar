<script setup lang="ts"></script>

<template>
  <div>
    <div class="hero">
     <div class="content">
      <div class="item">
       <img src="~/assets/logo-le-celtic-blanc.svg" alt="Le Celtic" class="logo-footer">
      <h2>Heures D’ouverture :</h2>
      <p>Du Lundi au Dimanche de: 07:00 à minuit</p>
      <h2>Contactez Le Celtic</h2>
      <p>11 Avenue Lucien Cornet,89100 Sens</p>
      <p>Email: <a href="mailto:contact@le-celtic-bar.fr">contact@le-celtic-bar.fr</a></p>
      <p>03 58 45 60 73</p>
      </div>
      <div class="item">
       <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10637.899116033648!2d3.2748341!3d48.1974703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe4dbf7fd9bd0c7eb!2sLe%20Celtic%20Bar!5e0!3m2!1sfr!2sfr!4v1667213362310!5m2!1sfr!2sfr" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
     </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
  height: 600px;
  position: relative;
}
.content {
 display: flex;
 flex-direction: row;
 justify-content: center;
 width: 1200px;
}
@media screen and (max-width: 800px) {
 .content {
 flex-direction: column;
}
}
.item{
 width: 100%;
}
.logo-footer {
 width: 300px;
 height: auto;
}
iframe {
 border-radius: 10px;
}
</style>
