const propList = [
  { prop: 'name', label: '用户名', minWidth: '100', align: 'center' },
  { prop: 'realname', label: '真实姓名', minWidth: '100', align: 'center' },
  { prop: 'cellphone', label: '手机号码', minWidth: '120', align: 'center' },
  { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status', align: 'center' },
  { prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'createAt', align: 'center' },
  { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateAt', align: 'center' },
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
