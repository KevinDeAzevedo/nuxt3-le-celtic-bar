<template>
  <div>
    <slot />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;400&family=Playfair+Display&family=Quicksand&display=swap');

html,
body {
  width: 100%;
  margin: 0;
  padding: 0;
  margin: 0;
  left: 0;
  top: 0;
  font-size: 100%;
  font-family: 'helvetica', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  line-height: initial;
  color: #2A1111;
  scroll-behavior: smooth;
  border: 1px solid green;
}

h1,h2,h3 {
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  margin: 0;
}

h1 {
  font-weight: 400;
  font-size: 4.5rem;
}

h2 {
  font-weight: 400;
  font-size: 2.5rem;
}

h3 {
  font-weight: 200;
  font-size: 1.8rem;
}

.links p {
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
}

p {
  font-family: 'Quicksand', sans-serif;
  font-size: 1.3rem;
  margin: 0;
}

p.product {
  font-family: 'Playfair Display', serif;
  font-size: 1.7rem;
}

p.description {
  color: #858585;
}

p.price {
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  color: #ED9C3B;
  text-transform: uppercase;
}

p.name {
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
}

* {
  box-sizing: border-box; /* helpfull to force padding inside blocks do not break the layout */
}

*::before,
*::after {
  -webkit-box-sizing: inherit;
          box-sizing: inherit;
}


a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: rgb(10, 170, 106);
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  font-size: 12px;
  color: black;
  background-color: #ddd;
  text-align: center;
  cursor: pointer;
}

button:hover {
  background-color: rgb(10, 170, 106);
  color: white;
}

.link-button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  font-size: 12px;
  color: black;
  background-color: #ddd;
  text-align: center;
  cursor: pointer;
}

.link-button:hover {
  background-color: rgb(10, 170, 106);
  color: white;
}
</style>