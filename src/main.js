import { createApp } from 'vue'
import App from './App.vue'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
defineElement(lottie.loadAnimation);
import { router } from "./router"
createApp(App).use(router).mount('#app')
