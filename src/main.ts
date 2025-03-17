import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('PrismEditor', PrismEditor)
app.mount('#app')
