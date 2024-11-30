import { createApp, App as VueApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import './style.css'

const app: VueApp = createApp(App);
const pinia = createPinia();

app.use(router); 
app.use(pinia)
app.mount('#app');
