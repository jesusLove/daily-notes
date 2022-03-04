import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import installIcons from '@/icons'
import i18n from './i18n'

const app = createApp(App)
installIcons(app)
app.use(i18n)
app.use(store).use(router).mount('#app')
