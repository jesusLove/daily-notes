const getters = {
  token: (state) => state.user.token,
  language: (state) => state.app.language,
  userInfo: (state) => state.user.userInfo,
  hasUserInfo: (state) => JSON.stringify(state.user.userInfo) !== '{}'
}
export default getters
