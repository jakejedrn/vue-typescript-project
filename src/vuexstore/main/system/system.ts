import { type Module } from 'vuex'
import type { ISystemState } from './types'
import type { IRootState } from '@/vuexstore/type'
import { getPageListData } from '@/service/main/system/system'
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      userList: []
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.usersList = userList
    },
    changeUserCount(state, userCount: number) {
      state.usersCount = userCount
    }
  },
  getters: {},
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const { pageUrl, queryInfo } = payload || {}
      const pageResult = await getPageListData(pageUrl, queryInfo)
      const { list, totalCount } = pageResult.data || {}
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  }
}

export default systemModule
