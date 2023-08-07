<template>
  <div class="tags">
    <template v-if="!tags.length">
      Список тегов пуст.
    </template>
    <TheButton
      v-for="(tag, index) in tags"
      :key="`${tag}-${index}`"
      color="grey"
      :clearable="clearable"
      @click="$emit('click', tag)"
    >
      {{ tag }}
    </TheButton>
  </div>
</template>

<script setup>
import TheButton from './TheButton.vue';

defineEmits(['click']);
defineProps({
  tags: {
    type: Array,
    required: true,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>