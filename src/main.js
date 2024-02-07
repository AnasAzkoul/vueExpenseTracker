import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);

const options = {
  position: POSITION.BOTTOM_RIGHT,
  timeout: 2000,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  hideProgressBar: false,
  closeButton: 'button'
};

app.use(Toast, options);

app.mount('#app');
