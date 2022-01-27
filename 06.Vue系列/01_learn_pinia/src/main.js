import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import App from './pages/01_pinia初识.vue'
// import App from './pages/02_store解构.vue'
// import App from './pages/03_state概念.vue'
// import App from './pages/04_state修改替换.vue'
// import App from './pages/05_state订阅.vue'

// import App from './pages/06_getters概念.vue'
// import App from './pages/07_actions概念.vue'
import App from './pages/08_actions订阅.vue'

const app = createApp(App)

// 1. 注册 createPinia
app.use(createPinia())

app.mount('#app')
