import { createStore } from 'vuex'
import type { IRootState } from './type'
import loginStore from './UserLogin/userLogin'

const store = createStore<IRootState>({
  state: () => {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {},
  modules: {
    login: loginStore
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
