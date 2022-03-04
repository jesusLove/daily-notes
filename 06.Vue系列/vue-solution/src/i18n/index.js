import { createI18n } from 'vue-i18n'
import zhLocale from './lang/zh'
import enLocale from './lang/en'
const messages = {
  en: {
    msg: {
      ...enLocale
    }
  },
  zh: {
    msg: {
      ...zhLocale
    }
  }
}
const locale = 'en'

const i18n = createI18n({
  legacy: false, // Composition API 需要设置为 false
  globalInjection: true, // 注入 $t
  locale,
  messages
})

export default i18n
