import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../public/media.css'
import '../public/Global.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(router).mount('#app')
import 'bootstrap/dist/js/bootstrap'