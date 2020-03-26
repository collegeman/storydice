import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCamera, faBars, faCalendar, faHashtag, faUsers, faPlusCircle, faShare, faPrint, faQuestionCircle, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faCamera)
library.add(faBars)
library.add(faCalendar)
library.add(faHashtag)
library.add(faUsers)
library.add(faPlusSquare)
library.add(faPlusCircle)
library.add(faShare)
library.add(faPrint)
library.add(faQuestionCircle)
library.add(faCircleNotch)

Vue.component('fa', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
