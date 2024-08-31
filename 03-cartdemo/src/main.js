import { createApp } from 'vue'
import App from './App.vue'

import './assets/css/bootstrap.css'
import './index.css'
import axios from 'axios'

axios.defaults.baseURL = 'https://applet-base-api-t.itheima.net'


const app = createApp(App)
app.config.globalProperties.$http = axios

app.mount('#app')
