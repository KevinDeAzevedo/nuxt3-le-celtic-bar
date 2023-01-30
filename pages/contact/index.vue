<script setup lang="ts">
/* Data form */
var firstName = ref('');
var lastName = ref('');
var mailAddress = ref('');
var comments = ref('');
let sendingMessage = ref('');
let sended = ref(false);
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
      <div v-if="sended">
        <p>{{ sendingMessage }}</p>
      </div>
      <div v-else>
        <button class="submitButton" type="submit" value="Send">
          Envoyer
        </button>
      </div>
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
