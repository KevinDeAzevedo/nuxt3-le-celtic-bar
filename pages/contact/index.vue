<script setup lang="ts">
import type { form } from '~/types';
import type { Strapi4Response } from '@nuxtjs/strapi';
const { create } = useStrapi4();

useHead({
  htmlAttrs: {
      lang: 'fr'
    },
  meta: [
    { name: 'description', content: `Entrez en contact avec nous au Celtic Bar de Sens pour toutes vos questions et pour garantir un moment inoubliable. Nous sommes là pour vous aider.` }
  ]
})

const onSubmit = async () => {
  try {
    await create<Strapi4Response<form>>('forms', {
      mailAddress: mailAddress.value,
      firstName: firstName.value,
      lastName: lastName.value,
      comments: comments.value,
    });
    firstName.value = '';
    lastName.value = '';
    mailAddress.value = '';
    comments.value = '';
    response.value = 'Message envoyé !';
    document.querySelector('#submit').style.display = 'none';
  } catch (error) {
    response.value = 'Oups une erreur est survenue...';
  }
};

function sendClick() {
  if (
    validateEmail(mailAddress.value) &&
    validateName(firstName.value, 'firstNameErrorMsg', 'Prénom invalide') &&
    validateName(lastName.value, 'lastNameErrorMsg', 'Nom invalide')
  ) {
    onSubmit();
  }
}

function validateEmail(emailParam) {
  const emailReg = new RegExp(
    /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/i
  ); // Format e-mail
  if (emailReg.test(emailParam)) {
    document.querySelector('#emailErrorMsg').textContent = '';
    return emailReg.test(emailParam);
  } else {
    document.querySelector('#emailErrorMsg').textContent = 'Email invalide';
    return emailReg.test(emailParam);
  }
}

function validateName(nameParam, errorIdParam, alertMessageParam) {
  const nameReg = new RegExp(/^[a-zA-ZÀ-ÿ -]+$/i);
  if (nameReg.test(nameParam)) {
    document.querySelector(`#${errorIdParam}`).textContent = '';
    return nameReg.test(nameParam);
  } else {
    document.querySelector(`#${errorIdParam}`).textContent = alertMessageParam;
    return nameReg.test(nameParam);
  }
}

/* Data form */
let firstName = ref('');
let lastName = ref('');
let mailAddress = ref('');
let comments = ref('');
let response = ref('');

var heroImage = ref('/images/cafe-le-celtic-bar-sens-hero.jpg');
</script>

<template>
  <div>
    <div class="tiny-hero">
      <div
        class="tiny-hero-image"
        :style="{ backgroundImage: 'url(' + heroImage + ')' }"
      ></div>
      <div class="tiny-hero-text">
        <div class="arabesque">
          <img src="~/assets/arabesque01.svg" alt="Illustration arabesque" />
        </div>
        <h1>Contacter le bar</h1>
        <div class="arabesque">
          <img src="~/assets/arabesque02.svg" alt="Illustration arabesque" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content-contact">
        <div class="content-item">
          <h2 class="middle-title">Nous écrire</h2>
          <form @submit.prevent="sendClick" class="form">
            <BaseInput v-model="firstName" label="Votre prénom" type="text" />
            <div id="firstNameErrorMsg"></div>
            <BaseInput v-model="lastName" label="Votre nom" type="text" />
            <div id="lastNameErrorMsg"></div>
            <BaseInput
              v-model="mailAddress"
              label="Votre adresse e-mail"
              type="email"
              autocomplete="on"
              required
            />
            <div id="emailErrorMsg"></div>
            <BaseTextArea v-model="comments" label="Votre message" />
            <button
              id="submit"
              class="submitButton secondary-btn"
              type="submit"
              value="Send"
            >
              Envoyer
            </button>
            <div id='responseMsg'>{{ response }}</div>
          </form>
        </div>
        <div class="content-item" id='infos'>
          <h2 class="middle-title">Se rencontrer</h2>
          <ContentDoc path="/contact/infos" />
        </div>
        </div>
      </div>
    <Footer />
  </div>
</template>

<style>
#firstNameErrorMsg, #lastNameErrorMsg, #emailErrorMsg {
  color: red;
}

#responseMsg {
  margin: auto;
  color: green;
}

.middle-title {
  text-align: center;
  margin-bottom: 60px;
}

.content-contact {
  display: flex;
  align-items: flex-start;
  width: 1200px;
  padding: 20px;
  gap: 60px;
  margin: 100px 0 100px 0;
}

.form {
  display: flex;
  flex-direction: column;
}

label {
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  line-height: 1.2em;
  margin-top: 15px;
  font-weight: 200;
  font-size: 1.8rem;
}

.field {
  width: 100%;
  height: 64px;
  margin: 10px 0;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
  font-size: 1.3rem;
  background-color: #ffffff;
  padding: 12px 20px 12px 20px;
  border: 1px solid #c9c9c9;
  box-shadow: 0 15px 12px -10px rgba(42, 17, 17, 0.19);
  border-radius: 15px;
}

.field:focus {
  outline: none;
  border: 1px solid #FFB863;
  background-color: #FFFBF5;
  box-shadow: 0 15px 12px -10px #FFF3E1;

}

.textarea {
  height: 190px;
  padding: 25px 20px 12px 20px;
  margin-bottom: 50px;
  resize: none;
  overflow: auto;
}

.form button {
  max-width: 200px;
  margin: auto;
}

#infos .link-button{
  display: block;
  width: 160px;
  margin: auto;
}

table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  font-family: 'Quicksand', sans-serif;
  font-size: 1.3rem;
}

tr:nth-child(even) {
  background: #FFF;
}

tr:nth-child(odd) {
  background: #F6F3F2;
}

td {
  padding: 15px;
}

@media screen and (max-width: 800px) {
  .content-contact {
    max-width: 100%;
    flex-direction: column;
  }
}
</style>
