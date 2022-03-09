import variables from '@/styles/variables.module.scss'

const getters = {
  token: (state) => state.user.token,
  language: (state) => state.app.language,
  userInfo: (state) => state.user.userInfo,
  hasUserInfo: (state) => JSON.stringify(state.user.userInfo) !== '{}',
  cssVars: (state) => variables,
  sidebarOpened: (state) => state.app.sidebarOpened
}
export default getters
