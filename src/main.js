import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'
import { createI18n } from 'vue-i18n'
import locales from '@/locales'

import './assets/css/main.css'

const i18n = createI18n({
    locale: 'ru',
    fallbackLocale: 'en',
    messages: { ...locales }
})

const emitter = mitt()
const app = createApp(App)

app.config.globalProperties.emitter = emitter

app.use(router).use(i18n).mount('#app')
