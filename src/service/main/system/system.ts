import hRequest from '../../index'
import type { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return hRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return hRequest.delete<IDataType>({
    url: url
  })
}
