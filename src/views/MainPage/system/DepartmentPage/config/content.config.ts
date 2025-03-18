const propList = [
  { prop: 'name', label: '部门名称', minWidth: '100', align: 'center' },
  { prop: 'leader', label: '部门领导', minWidth: '100', align: 'center' },
  {
    prop: 'createAt',
    label: '创建时间',
    minWidth: '220',
    slotName: 'createAt',
    align: 'center'
  },
  {
    prop: 'updateAt',
    label: '更新时间',
    minWidth: '220',
    slotName: 'updateAt',
    align: 'center'
  },
  { label: '操作', width: '150', slotName: 'handler', align: 'center', fixed: 'right' }
]

const title = '用户列表'
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
