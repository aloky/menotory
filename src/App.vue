<template>
  <main class="main">
    <h1 class="text-h1">
      Добавленные теги ({{ tagsCount }}):
    </h1>
    <TheTags :tags="tags" />
    <div>
      <TheButton @click="dialog = true">
        Открыть модалку
      </TheButton>
    </div>
    <TheModal
      v-model="dialog"
      :tags="tags"
    />
  </main>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import TheModal from './components/TheModal.vue'
import TheTags from './components/TheTags.vue';
import TheButton from './components/TheButton.vue';

const store = useStore();

const tags = computed(() => store.getters.tags);
const tagsCount = computed(() => store.getters.tagsCount);

const dialog = ref(false);
</script>

<style lang="scss" scoped>
.main {
  padding: 16px;
  width: 699px;
  max-width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  .text-h1 {
    font-size: 24px;
  }
}
</style>
