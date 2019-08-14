import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faJsSquare,
  faVuejs,
  faReact,
  faPhp,
  faDocker,
  faApple
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faEnvelope,
  faArrowDown,
  faLinkedin,
  faGithub,
  faJsSquare,
  faVuejs,
  faReact,
  faPhp,
  faDocker,
  faApple
  )

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
