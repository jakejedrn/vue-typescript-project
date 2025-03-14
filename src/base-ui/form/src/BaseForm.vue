<script lang="ts" setup>
import { type PropType } from 'vue'
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker
} from 'element-plus'
import type { IFormItem, IForm } from '../types'

const props: IForm = defineProps({
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => [],
    required: true
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '10px 40px' })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6, // >1920px 4个
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
})
</script>

<template>
  <div class="hy-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="props.labelWidth">
      <el-row>
        <template v-for="item in props.formItems" :key="item.field">
          <el-col v-bind="props.colLayout">
            <el-form-item
              :style="props.itemStyle"
              :label="item.label"
              :prop="item.field"
              :rules="item.rules"
            >
              <template v-if="item.type === 'input'">
                <el-input v-bind="item.otherOptions" :placeholder="item.placeholder" />
              </template>
              <template v-else-if="item.type === 'password'">
                <el-input
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                  type="password"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select v-bind="item.otherOptions" :placeholder="item.placeholder">
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  />
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker v-bind="item.otherOptions" style="width: 100%" type="daterange" />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
  <div class="footer">
    <slot name="footer"></slot>
  </div>
</template>

<style lang="less">
.hy-form {
  padding-top: 22px;
}
</style>
