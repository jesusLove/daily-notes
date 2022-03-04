const getters = {
  token: (state) => state.user.token,
  language: (state) => state.app.language,
  hasUserInfo: (state) => JSON.stringify(state.user.userInfo) !== '{}'
}
export default getters
