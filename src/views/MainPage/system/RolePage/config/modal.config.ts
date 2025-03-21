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
    label: '角色名',
    placeholder: '请输入角色名'
  },
  {
    field: 'intro',
    type: 'input',
    label: '权限介绍',
    placeholder: '请输入权限介绍'
  }
]

const modalConfig: IForm = {
  labelWidth,
  colLayout,
  itemStyle,
  formItems
}

export { modalConfig }
