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
    label: '部门名称',
    placeholder: '请输入部门名称'
  },
  {
    field: 'leader',
    type: 'input',
    label: '部门领导',
    placeholder: '请输入部门领导'
  }
]

const modalConfig: IForm = {
  labelWidth,
  colLayout,
  itemStyle,
  formItems
}

export { modalConfig }
