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
    label: '菜单名称',
    placeholder: '请输入菜单名称'
  },
  {
    field: '菜单url',
    type: 'input',
    label: '菜单url',
    placeholder: '请输入菜单url'
  },
  {
    field: '按钮权限',
    type: 'input',
    label: '按钮权限',
    placeholder: '请输入按钮权限'
  },
  {
    field: '类型',
    type: 'select',
    label: '类型',
    placeholder: '请选择类型',
    options: [
      { label: '启用', value: 1 },
      { label: '禁用', value: 0 }
    ]
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
