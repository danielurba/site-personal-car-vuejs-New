import Vue from 'vue'
import App from './App.vue'
import router from './components/config/router'
import store from './components/config/toogle'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
