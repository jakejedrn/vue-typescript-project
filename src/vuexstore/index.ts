import { createStore, Store, useStore as useVuexStore } from 'vuex'
import type { IRootState, IStoreType } from './type'
import loginStore from './UserLogin/userLogin'
import systemStore from './main/system/system'
import { getPageListData } from '@/service/main/system/system'

const store = createStore<IRootState>({
  state: () => {
    return {
      count: 0,
      entireDepartment: [],
      entireRole: [],
      entireCategory: []
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    changeEnterDepartList(state, list) {
      state.entireDepartment = list
    },
    changeEnterRoleList(state, list) {
      state.entireRole = list
    },
    changeEnterCategoryList(state, list) {
      state.entireCategory = list
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      const departmentReault = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departList } = departmentReault.data
      commit('changeEnterDepartList', departList)

      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data
      commit('changeEnterRoleList', roleList)

      const categoryResult = await getPageListData('/category/list', {
        offset: 0,
        size: 1000
      })
      const { list: categoryList } = categoryResult.data
      commit('changeEnterCategoryList', categoryList)
    }
  },
  modules: {
    login: loginStore,
    system: systemStore
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  store.dispatch('getInitialDataAction')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
