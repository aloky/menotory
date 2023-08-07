import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex';

import App from './App.vue'

const store = createStore({
  state() {
    return {
      tags: JSON.parse(localStorage.getItem('tags')) || [],
    };
  },
  getters: {
    tags (state) {
      return state.tags;
    },
    tagsCount (_state, getters) {
      return getters.tags.length
    }
  },
  mutations: {
    setTags(state, tags) {
      state.tags = tags;
      localStorage.setItem('tags', JSON.stringify(tags));
    },
  }
});

createApp(App)
  .use(store)
  .mount('#app')
