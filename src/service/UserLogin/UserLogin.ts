import hRequest from '../index'
import type { IAccount, ILoginReault } from './type'
import type { IDataType } from '@/service/types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = `/users/`, // 用法：/users/1
  UserMenus = '/role/' // 用法： role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return hRequest.post<IDataType<ILoginReault>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return hRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + `${id}`
  })
}

export function requestUserMenusByRoleId(id: number) {
  return hRequest.get<IDataType>({
    url: LoginAPI.UserMenus + `${id}/menu`,
    showLoading: false
  })
}
