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
}

h1,h2,h3 {
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  line-height: 1.2em;
  margin: 0;
}

h1 {
  font-weight: 400;
  font-size: 4.2rem;
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
  margin: 25px 0;
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
  color: #ED9C3B;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 15px 42px;
  border-radius: 50px;
  text-align: center;
  cursor: pointer;
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  text-transform: uppercase;
}

button.primary-btn {
  color: white;
  background-color: #2A1111;
}

button.secondary-btn {
  color: #2A1111;
  background-color: #FFB863;
}

button.primary-btn:hover, .secondary-btn:hover{
  color: #2A1111;
  background-color: #FDDAB0;
}

.link-secondary-button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 15px 42px;
  margin: 10px 0;
  font-size: 12px;
  color: white;
  background-color: #2A1111;
  border-radius: 50px;
  text-align: center;
  cursor: pointer;
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  text-transform: uppercase;
}

.link-secondary-button:hover {
  color: #2A1111;
  background-color: #FDDAB0;
}

</style>