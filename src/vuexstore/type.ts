import type { ILoginState } from './UserLogin/type'
import type { ISystemState } from './main/system/types'

export interface IRootState {
  count: number
  entireDepartment: any[]
  entireRole: any[]
  entireCategory: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
