import { LANG } from '@/constant'
import { setItem, getItem } from '@/utils/storage'

export default {
  namespaced: true,
  state: () => ({
    language: getItem(LANG) || 'zh',
    sidebarOpened: true
  }),
  mutations: {
    setLanguage(state, lang) {
      setItem(LANG, lang)
      state.language = lang
    },
    triggerSidebarOpened(state) {
      state.sidebarOpened = !state.sidebarOpened
    }
  },
  actions: {}
}
