import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import { createI18n } from 'vue-i18n'
import { optionsI18n } from './utils/i18n/options'

const i18n = createI18n(optionsI18n)

const app = createApp(App)

app.use(i18n)
app.use(router)
app.mount('#app')

