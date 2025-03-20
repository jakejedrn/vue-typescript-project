import type { Module } from 'vuex'
import type { ILoginState } from './type.ts'
import type { IRootState } from '../type.ts'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/UserLogin/UserLogin.ts'
import type { IAccount } from '@/service/UserLogin/type.ts'
import localCache from '@/utils/cache'
import router from '@/router'
import { mapMenusToRoutes, mapMenusToPermissions } from '@/utils/map-menus.ts'

const userLoginStore: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      const routes = mapMenusToRoutes(userMenus)
      routes.forEach((route) => {
        router.addRoute('mainPage', route)
      })
      const permissions = mapMenusToPermissions(userMenus)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const result = await accountLoginRequest(payload)

      const { data } = result || {}
      const { token, id } = data || {}
      if (token) {
        localCache.setCache('token', token)
        commit('changeToken', token)

        const userResult = await requestUserInfoById(id)
        const { data: userInfo } = userResult || {}
        localCache.setCache('userInfo', userInfo)
        commit('changeUserInfo', userInfo)

        const userMenuResult = await requestUserMenusByRoleId(id)
        const { data: userMenusList } = userMenuResult || {}
        localCache.setCache('userMenus', userMenusList || [])
        commit('changeUserMenus', userMenusList)

        router.push('/main')
      }
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token') || ''
      const userInfo = localCache.getCache('userInfo') || {}
      const userMenus = localCache.getCache('userMenus') || []
      commit('changeToken', token)
      commit('changeUserInfo', userInfo)
      commit('changeUserMenus', userMenus)
    }
  },
  getters: {}
}

export default userLoginStore
