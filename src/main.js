import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import router from './router'
import '../axios'
// packages
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import VueRoughNotation from 'vue-rough-notation'
import { plugin, defaultConfig } from '@formkit/vue'
import './assets/tailwind.css'
import ToastPlugin from 'vue-toast-notification'
import VueCodeHighlight from 'vue-code-highlight'
//
// components
import baseButtonDark from './components/BaseCmps/baseButtonDark.vue'
import baseButtonLight from './components/BaseCmps/baseButtonLight.vue'
import gradientLabel from './components/BaseCmps/gradientLabel.vue'
import breakLine from './components/BaseCmps/breakLine.vue'
import codeExample from './components/BaseCmps/codeExample.vue'
//
const app = createApp(App)
const pinia = createPinia()
// middlewares
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(plugin, defaultConfig)
app.use(ToastPlugin)
app.use(VueRoughNotation)

// components
app
  .component('baseButtonDark', baseButtonDark)
  .component('baseButtonLight', baseButtonLight)
  .component('gradientLabel', gradientLabel)
  .component('breakLine', breakLine)
  .component('codeExample', codeExample)
//
app.mount('#app')
