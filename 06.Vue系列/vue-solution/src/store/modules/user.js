import { login } from '@/api/sys'
import md5 from 'md5'

export default {
  namespaced: true,
  state: () => ({}),
  mutations: {},
  actions: {
    login(ctx, { username, password }) {
      return new Promise((resolve, reject) => {
        login({ username, password: md5(password) })
          .then((data) => {
            resolve(data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
