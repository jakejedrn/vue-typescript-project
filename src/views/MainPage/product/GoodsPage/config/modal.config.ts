import { type IFormItem, type IForm } from '@/base-ui/form'
const itemStyle = {
  padding: ' 0px 10px 0px 0px'
}

const labelWidth = '100px'

const colLayout = { span: 24 }

const formItems: IFormItem[] = [
  {
    field: 'name',
    type: 'input',
    label: '商品名称',
    placeholder: '请输入商品名称'
  },
  {
    field: 'oldPrice',
    type: 'input',
    label: '原价格',
    placeholder: '原价格'
  },
  {
    field: 'newPrice',
    type: 'input',
    label: '现价格',
    placeholder: '现价格'
  },
  {
    field: 'categoryId',
    type: 'select',
    label: '商品分类',
    placeholder: '请输入商品分类',
    options: []
  },
  {
    field: 'imgUrl',
    type: 'input',
    label: '商品图片',
    placeholder: '请上传商品图片'
  }
]

const modalConfig: IForm = {
  labelWidth,
  colLayout,
  itemStyle,
  formItems
}

export { modalConfig }
