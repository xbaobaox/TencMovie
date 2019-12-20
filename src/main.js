import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)　
Vue.config.productionTip = false
// Vue.use(axios)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
