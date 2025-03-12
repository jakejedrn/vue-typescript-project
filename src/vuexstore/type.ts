import type { ILoginState } from './UserLogin/type'

export interface IRootState {
  count: number
}

export interface IRootWithModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
