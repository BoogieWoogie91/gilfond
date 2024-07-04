import './assets/main.scss'
import 'vue3-toastify/dist/index.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

const app = createApp(App)

app.use(router).use(store)

app.mount('#app')
