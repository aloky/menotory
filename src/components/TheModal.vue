<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="modal-overlay"
      @click="$emit('update:model-value', false)"
    >
      <div
        class="modal-content"
        @click.stop
      >
        <div class="modal-header">
          <div class="modal-title">
            Добавление тегов
          </div>
          <div class="modal-subtitle">
            Вы можете добавить ещё <span>{{ 20 - addedTags.length }}</span>
          </div>
        </div>
        <TheSpinner v-if="isLoading" />
        <div
          v-else-if="error"
          class="modal-body text-red"
        >
          {{ error }}
        </div>
        <template v-else>
          <div class="modal-body">
            <TheInput
              v-model="search"
              label="Название тега"
              placeholder="Поиск"
            />
            <TheTags
              v-if="filteredTags.length"
              :tags="filteredTags"
              @click="addTag"
            />
          </div>
          <div
            v-if="addedTags.length"
            class="modal-body-after"
          >
            <TheTags
              :tags="addedTags"
              clearable
              @click="removeTag"
            />
          </div>
        </template>
        <div class="modal-footer">
          <TheButton
            @click="save"
          >
            Сохранить
          </TheButton>
          <TheButton
            color="grey"
            @click="$emit('update:model-value', false)"
          >
            Отмена
          </TheButton>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { watch, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useFetchData } from '../composables/useFetchData';
import TheTags from './TheTags.vue';
import TheInput from './TheInput.vue';
import TheButton from './TheButton.vue';
import TheSpinner from './TheSpinner.vue';

const emit = defineEmits(['update:model-value'])
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
});

const isLoading = ref(false);
const error = ref('');
const store = useStore();
const data = ref([]);
const search = ref('');
const addedTags = ref([...store.getters.tags]);

const isEqualitySearch = (a) => a.toLowerCase().includes(search.value.toLowerCase())

const filteredTags = computed(() => {
  const filtered = [];

  if (!search.value) return [];

  data.value.forEach((catalog) => {
    if (isEqualitySearch(catalog.name)) {
      catalog.categories.forEach((category) => {
        category.subcategories.forEach((subcategory) => {
          subcategory.tags.forEach((tag) => {
            filtered.push(tag.name);
          });
        });
      });
    } else {
      catalog.categories.forEach((category) => {
        if (isEqualitySearch(category.name)) {
          category.subcategories.forEach((subcategory) => {
            subcategory.tags.forEach((tag) => {
              filtered.push(tag.name);
            });
          });
        } else {
          category.subcategories.forEach((subcategory) => {
            if (isEqualitySearch(subcategory.name)) {
              subcategory.tags.forEach((tag) => {
                filtered.push(tag.name)
              })
            } else {
              subcategory.tags.forEach((tag) => {
                if (
                  isEqualitySearch(tag.name) ||
                  tag.aliases.some((alias) => isEqualitySearch(alias))
                ) {
                  filtered.push(tag.name);
                }
              })
            }
          })
        }
      })
    }
  });

  return filtered;
})

watch(() => props.modelValue, async (value) => {
  if (value) {
    isLoading.value = true;
    try {
      data.value = await useFetchData();
    } catch (err) {
      console.error(err);
      error.value = err.error;
    } finally {
      isLoading.value = false;
    }
  } else {
    data.value = [];
    search.value = '';
    addedTags.value = [...store.getters.tags];
  }
});

const addTag = (tag) => {
  if (!addedTags.value.includes(tag) && addedTags.value.length < 20) {
    addedTags.value.push(tag);
  }
}

const removeTag = (tag) => {
  addedTags.value = addedTags.value.filter((el) => el !== tag);
}

const save = () => {
  store.commit('setTags', addedTags.value);
  emit('update:model-value', false)
}
</script>

<style scoped lang="scss">
.modal {
  &-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .4);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }
  &-content {
    background-color: #fff;
    width: 500px;
    border-radius: 8px;
    max-width: 100%;
    max-height: 100%;
    overflow: scroll;
  }
  &-header {
    padding: 24px 24px 12px;
    border-bottom: 1px solid #f6f6f9;
  }
  &-title {
    font-size: 16px;
    font-weight: bold;
  }
  &-subtitle {
    font-size: 14px;
    font-weight: 500;
    color: #8C8F97;
    span {
      color: #000;
      font-weight: bold;
    }
  }
  &-body, &-body-after {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    border-bottom: 1px solid #f6f6f9;
    &.text-red {
      color: red;
    }
  }
  &-footer {
    position: sticky;
    bottom: 0;
    left: 0;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 8px;
    padding: 24px;
  }
}
</style>
