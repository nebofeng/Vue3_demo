import { createApp } from 'vue'
import App from './App.vue'

import './assets/css/bootstrap.css'
import './index.css'
import axios from 'axios'


const app = createApp(App)
axios.defaults.baseURL = 'https://applet-base-api-t.itheima.net'
app.config.globalProperties.$http = axios
app.mount('#app')
