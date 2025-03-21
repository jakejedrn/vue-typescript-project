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
    label: '用户名',
    placeholder: '请输入用户名'
  },
  {
    field: 'realname',
    type: 'input',
    label: '真实姓名',
    placeholder: '请输入真实姓名'
  },
  {
    field: 'password',
    type: 'password',
    label: '用户密码',
    placeholder: '请输入密码'
  },
  {
    field: 'cellphone',
    type: 'input',
    label: '电话号码',
    placeholder: '请输入电话号码'
  },
  {
    field: 'enable',
    type: 'select',
    label: '用户状态',
    placeholder: '请选择用户状态',
    options: [
      { label: '启用', value: 1 },
      { label: '禁用', value: 0 }
    ]
  }
]

const modalConfig: IForm = {
  labelWidth,
  colLayout,
  itemStyle,
  formItems
}

export { modalConfig }
