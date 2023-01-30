<script setup lang="ts">
import type { form } from '~/types'
import type { Strapi4Response } from '@nuxtjs/strapi'
const { create } = useStrapi4()
const onSubmit = async () => {
    try {
      await create<Strapi4Response<form>>('forms', { mailAddress: mailAddress.value , firstName: firstName.value,  lastName: lastName.value, comments: comments.value })
      document.querySelector('#sendErrorMsg').textContent = 'Envoyé !'
    } catch (error) {
      document.querySelector('#sendErrorMsg').textContent = 'Oups une erreur est survenue...'
  }
}

function sendClick() {
  if (validateEmail(mailAddress.value) && validateName(firstName.value, 'firstNameErrorMsg', 'Prénom invalide') && validateName(lastName.value, 'lastNameErrorMsg', 'Nom invalide')) {
    onSubmit()
  }
}

function validateEmail(emailParam){
  const emailReg = new RegExp(/^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/i) // Format e-mail
  if (emailReg.test(emailParam)){
    document.querySelector('#emailErrorMsg').textContent = ''
    return emailReg.test(emailParam);
  } else {
    document.querySelector('#emailErrorMsg').textContent = 'Email invalide'
    return emailReg.test(emailParam);
  }
}

function validateName(nameParam, errorIdParam, alertMessageParam){
  const nameReg = new RegExp(/^[a-zA-ZÀ-ÿ -]+$/i)
  if (nameReg.test(nameParam)){
    document.querySelector(`#${errorIdParam}`).textContent = ''
    return nameReg.test(nameParam);
  } else {
    document.querySelector(`#${errorIdParam}`).textContent = alertMessageParam
    return nameReg.test(nameParam);
  }
}

/* Data form */
const firstName = ref('')
const lastName = ref('')
const mailAddress = ref('')
const comments = ref('')
</script>

<template>
  <div class='wrapper'>
    <form @submit.prevent="sendClick" class="form">
      <BaseInput v-model="firstName" label="Votre prénom" type="text" />
      <div id='firstNameErrorMsg'></div>
      <BaseInput v-model="lastName" label="Votre nom" type="text" />
      <div id='lastNameErrorMsg'></div>
      <div id='lastNameErrorMsg'></div>
      <BaseInput
        v-model="mailAddress"
        label="Votre adresse e-mail"
        type="email"
        autocomplete="on"
        required
      />
      <div id='emailErrorMsg'></div>
      <BaseTextArea v-model="comments" label="Votre message" />
        <button class="submitButton" type="submit" value="Send">
          Envoyer
        </button>
        <div id='sendErrorMsg'></div>
    </form>
  </div>
</template>

<style>

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 1000px;
  border: 1px solid red;
}

.form {
  display: flex;
  flex-direction: column;
  width: 300px;
}

</style>
