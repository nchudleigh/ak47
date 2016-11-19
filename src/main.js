import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './routes'
import fetch from 'whatwg-fetch'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  template: '<App/>',
  router,
  components: {
    App
  }
}).$mount('#app')
