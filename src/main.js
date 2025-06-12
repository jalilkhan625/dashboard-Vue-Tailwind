import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueApexCharts from 'vue3-apexcharts'

// Font Awesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faHouse,
  faGaugeHigh,
  faLayerGroup,
  faListCheck,
  faUserGroup,
  faGear,
  faCircleQuestion,
  faRightFromBracket,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'

// Add icons to library
library.add(
  faHouse,
  faGaugeHigh,
  faLayerGroup,
  faListCheck,
  faUserGroup,
  faGear,
  faCircleQuestion,
  faRightFromBracket,
  faPlus
)

// Create app and register FontAwesomeIcon globally
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueApexCharts)
app.component('apexchart', VueApexCharts)
app.mount('#app')
