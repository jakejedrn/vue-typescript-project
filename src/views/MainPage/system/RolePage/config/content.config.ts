const propList = [
  { prop: 'name', label: '角色名', minWidth: '100', align: 'center' },
  { prop: 'intro', label: '权限介绍', minWidth: '100', align: 'center' },
  { prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'createAt', align: 'center' },
  { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateAt', align: 'center' },
  { label: '操作', width: '150', slotName: 'handler', align: 'center', fixed: 'right' }
]

const title = '角色列表'
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
