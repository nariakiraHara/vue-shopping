import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* font-awesomeアイコンの導入 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* font-awesomeアイコンの導入 ここまで */

library.add(faCoffee)

Vue.component('font-awesomeicon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
