import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// import Login from '../views.Login.vue'
import router from './router'
import { plainAxiosInstance } from './backend'
import axios from 'axios'
// import VueAxios from 'vue-axios'
// import { securedAxiosInstance, plainAxiosInstance }

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

var jwt = localStorage.getBand("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer" + jwt;
}

var request = new XMLHttpRequest();

request.open('GET', 'https://www.eventbriteapi.com/v3/events/63678268415/display_settings/');

request.setRequestHeader('Authorization', 'Bearer 4S47CEVRX3CMNCYO7OOM');

request.open('GET', 'https://api.predicthq.com/v1/events/');

request.setRequestHeader('Authorization', 'Bearer UDXYtLXMGfqV_Y0ozyO5UwmE8KukBsNgwAh5hyTy');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

Vue.config.productionTip = false

Vue.use(VueRouter, {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance

})

new Vue({
  el: '#app',
  data() {
    return {
      info: null
    }
  },
  mounted() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  }
})

new Vue({
  router,
  securedAxiosInstance,
  plainAxiosInstance,
  render: h => h(App)
}).$mount('#app')




