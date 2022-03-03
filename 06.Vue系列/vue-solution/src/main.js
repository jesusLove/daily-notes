import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import installIcons from '@/icons'

const app = createApp(App)
installIcons(app)

app.use(store).use(router).mount('#app')
