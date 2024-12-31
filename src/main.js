import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Vuesax from 'vuesax-alpha'
import 'vuesax-alpha/theme-chalk/index.css'
import 'vuesax-alpha/theme-chalk/dark/css-vars.css'
import AOS from 'aos';
import 'aos/dist/aos.css';



const app = createApp(App)



app.use(router)
app.use(Vuesax)
app.mount("#app")


AOS.init()