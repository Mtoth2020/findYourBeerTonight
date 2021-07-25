import Vue from 'vue'
import App from './App.vue'
import router from "@/app-routing/routing";
import store from './service'
import axios from 'axios'
import VueTilt from 'vue-tilt.js'

Vue.use(VueTilt)

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
