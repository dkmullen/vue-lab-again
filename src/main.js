import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerPlugins } from '@/plugins'

import App from './App.vue'
import router from './router'
import GlobalComponents from './globals.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(GlobalComponents)

registerPlugins(app)

app.mount('#app')
