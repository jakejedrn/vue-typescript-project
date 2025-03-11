export interface IAccount {
  account: string
  password: string
}

export interface IDataType<T = any> {
  code: number
  data: T
}

export interface ILoginReault {
  id: number
  name: string
  token: string
}
