<template>
  <label v-if="label">{{ label }}</label>
  <textarea v-bind="$attrs" :value="modelValue" :placeholder="label"
    @input="$emit('update:modelValue', $event.target.value)" class="field" rows="5" cols="33"></textarea>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>
