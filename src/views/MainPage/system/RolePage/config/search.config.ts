import { type IFormItem, type IForm } from '@/base-ui/form'
const itemStyle = { padding: '10px 40px' }

const labelWidth = '100px'

const colLayout = {
  xl: 6,
  lg: 8,
  md: 12,
  sm: 24,
  xs: 24
}

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
    placeholder: '请输入权限介绍内容'
  },
  {
    field: 'createAt',
    type: 'datepicker',
    label: '创建时间',
    otherOptions: {
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
      type: 'daterange'
    }
  }
]

const formConfig: IForm = {
  labelWidth,
  colLayout,
  itemStyle,
  formItems
}

export { formConfig }
