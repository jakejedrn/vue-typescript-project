const propList = [
  { prop: 'name', label: '菜单名称', minWidth: '150', align: 'center' },
  { prop: 'type', label: '类型', minWidth: '100', align: 'center', slotName: 'menuType' },
  { prop: 'url', label: '菜单url', minWidth: '100', align: 'center' },
  { prop: 'icon', label: '菜单icon', minWidth: '100', align: 'center' },
  { prop: 'permission', label: '按钮权限', minWidth: '100', align: 'center' },
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
  }
]

const title = '菜单列表'
const showIndexColumn = false
const showSelectColumn = false
const showFooter = false

const childrenProps = {
  rowKey: 'id',
  treeProp: {
    children: 'children'
  }
}

export const contentTableConfig = {
  title,
  propList,
  showIndexColumn,
  showSelectColumn,
  showFooter,
  childrenProps
}
