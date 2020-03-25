import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


// import openemoji from './assets/openmoji.json'
// import dice from './assets/dice.json'

const reqSvgs = require.context('./assets/openmoji-svg-color', true, /\.svg$/)
window.svgs = reqSvgs.keys().reduce((images, path) => {
  images[path] = reqSvgs(path)
  return images
}, {})

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
