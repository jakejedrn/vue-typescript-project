const propList = [
  { prop: 'name', label: '商品名称', minWidth: '200', align: 'center' },
  { prop: 'oldPrice', label: '原价格', minWidth: '80', slotName: 'oldPrice', align: 'center' },
  { prop: 'newPrice', label: '现价格', minWidth: '80', align: 'center', slotName: 'newPrice' },
  {
    prop: 'categoryId',
    label: '商品分类',
    minWidth: '120',
    align: 'center',
    slotName: 'categoryId'
  },
  { prop: 'imgUrl', label: '商品图片', minWidth: '100', slotName: 'image', align: 'center' },
  { prop: 'status', label: '状态', minWidth: '100', slotName: 'status', align: 'center' },
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
