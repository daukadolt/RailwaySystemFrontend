import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './custom.scss'
import App from './App.vue'
import store from './store'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
