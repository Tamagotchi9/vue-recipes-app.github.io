import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import {library} from "@fortawesome/fontawesome-svg-core";
import {
  faPlus, faTrash, faCheck, faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
library.add(faPlus, faTrash, faCheck, faArrowLeft)


Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
