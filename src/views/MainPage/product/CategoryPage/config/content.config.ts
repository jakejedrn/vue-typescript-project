const propList = [
  { prop: 'name', label: '类别名称', minWidth: '200', align: 'center' },
  {
    prop: 'createAt',
    label: '创建时间',
    minWidth: '250',
    slotName: 'createAt',
    align: 'center'
  },
  {
    prop: 'updateAt',
    label: '更新时间',
    minWidth: '250',
    slotName: 'updateAt',
    align: 'center'
  },
  { label: '操作', minWidth: '160', slotName: 'handler', fixed: 'right', align: 'center' }
]

const title = '商品列表'
const showIndexColumn = true
const showSelectColumn = true
const showFooter = true
export const contentTableConfig = {
  title,
  propList,
  showIndexColumn,
  showSelectColumn,
  showFooter
}
