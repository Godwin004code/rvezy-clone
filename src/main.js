import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import "./components/styles/switch.css"
import "./components/styles/main.css"
import "./components/styles/notfound.css"
import "./components/styles/singlepage.css"

createApp(App).use(router).mount('#app')
