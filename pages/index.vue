<script></script>

<template>
  <div>
    <div class="hero">
      <div
        class="hero-image"
        style="background-image: url(assets/hero.jpeg)"
      ></div>
      <div class="hero-text">
        <h1>Brand new hero image</h1>
        <p>Nice effect !</p>
        <button>Get one</button>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <h1>Hello my title</h1>
      </div>
    </div>
  </div>
</template>

<style>
.hero {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-image: linear-gradient(rgb(34, 0, 255), rgba(0, 0, 0));
  height: 500px;
  position: relative;
}

.hero-image {
  height: 100%;
  opacity: 50%;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: cover !important;
}

.hero-text {
  align-self: center;
  text-align: center;
  position: absolute;
  color: white;
}

.hero-text button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  color: black;
  background-color: #ddd;
  text-align: center;
  cursor: pointer;
}

.hero-text button:hover {
  background-color: rgb(28, 105, 239);
  color: white;
}

.container {
  display: flex;
  justify-content: center;
  width: 100%;
  border: 1px solid red;
}

.content {
  width: 1400px;
  border: 10px solid green;
}
</style>