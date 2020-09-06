import Vue from 'vue'
// import VueRouter from 'vue-router'
import App from './App.vue'
// import Login from '../views.Login.vue'
import router from './router'
import { plainAxiosInstance } from './backend'
import axios from 'axios'
// import VueAxios from 'vue-axios'
// import { securedAxiosInstance, plainAxiosInstance }

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')




