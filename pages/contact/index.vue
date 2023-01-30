<script setup lang="ts">
import type { form } from '~/types'
import type { Strapi4Response } from '@nuxtjs/strapi'
const { create } = useStrapi4()
const onSubmit = async () => {
  await create<Strapi4Response<form>>('forms', { mailAddress: mailAddress.value , firstName: firstName.value,  lastName: lastName.value, comments: comments.value })
}

/* Data form */
const firstName = ref('')
const lastName = ref('')
const mailAddress = ref('')
const comments = ref('')
</script>

<template>
  <div>
    <form @submit.prevent="onSubmit" class="form">
      <BaseInput v-model="firstName" label="Votre prénom" type="text" />
      <BaseInput v-model="lastName" label="Votre nom" type="text" />
      <BaseInput
        v-model="mailAddress"
        label="Votre adresse e-mail"
        type="email"
        autocomplete="on"
        required
      />
      <BaseTextArea v-model="comments" label="Votre message" />
        <button class="submitButton" type="submit" value="Send">
          Envoyer
        </button>
    </form>
  </div>
</template>

<style>

.form {
  display: flex;
  flex-direction: column;
  width: 300px;
}

</style>
