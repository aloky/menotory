<template>
  <label class="input-contain">
    <div
      v-if="label"
      class="input-label"
    >
      {{ label }}
    </div>
    <input
      type="text"
      autocomplete="off"
      :placeholder="placeholder"
      :model-value="modelValue"
      @input="$emit('update:model-value', $event.target.value)"
    >
  </label>
</template>

<script setup>
defineEmits('update:model-value');
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: null,
  },
})
</script>

<style scoped lang="scss">
.input {
  &-contain {
    position: relative;

    input {
      font-size: 16px;
      height: 48px;
      width: 100%;
      border-radius: 10px;
      padding: 8px 16px;
      border: 2px solid #862fde;
    }
  }
  &-label {
    margin-bottom: 8px;
  }
}
</style>