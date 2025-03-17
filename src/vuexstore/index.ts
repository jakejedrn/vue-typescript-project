import { createStore, Store, useStore as useVuexStore } from 'vuex'
import type { IRootState, IStoreType } from './type'
import loginStore from './UserLogin/userLogin'
import systemStore from './main/system/system'

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
    login: loginStore,
    system: systemStore
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
