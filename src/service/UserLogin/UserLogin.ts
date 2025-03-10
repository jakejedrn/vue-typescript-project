import hRequest from '../index'
import type { IAccount } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法：/users/1
  UserMenus = '/role/' // 用法： role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return hRequest.post({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
