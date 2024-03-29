import './assets/main.css'

import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n'
import en from "@/language/en.json";
import '@/assets/main.css'

// Create the Pinia store
const pinia = createPinia();

// Create the Vue app
const app = createApp(App);
console.log(en)
const i18n = createI18n({
    legacy: true,
    locale: "",
    fallbackLocale: "en",
    messages: {
      "en": en,
    }
  });

// Use Pinia in the app
app.use(pinia);

app.use(i18n);
// app.provide('globalData', globalData);
// Use Vue Router in the app
app.use(router);
// Mount the app to the DOM
app.mount('#app');

