import { login } from '@/api/sys'
import { getItem, setItem } from '@/utils/storage'
import md5 from 'md5'
import { TOKEN } from '@/constant'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    login(ctx, { username, password }) {
      return new Promise((resolve, reject) => {
        login({ username, password: md5(password) })
          .then((data) => {
            this.commit('user/setToken', data.token)
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
