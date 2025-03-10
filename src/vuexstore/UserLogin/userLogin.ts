import type { Module } from 'vuex'
import type { ILoginState } from './type.ts'
import type { IRootState } from '../type.ts'
import { accountLoginRequest } from '@/service/UserLogin/UserLogin.ts'
import type { IAccount } from '@/service/UserLogin/type.ts'

const userLoginStore: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const data = accountLoginRequest(payload)
      console.log('=====================================')
      console.log(data, '1111111111')
      console.log('=====================================')
      // commit('changeToken', payload.token)
      // commit('changeUserInfo', payload.userInfo)
    }
  },
  getters: {}
}

export default userLoginStore
