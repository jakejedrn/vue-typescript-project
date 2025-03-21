<script lang="ts" setup>
import { ref, watch } from 'vue'
import { ElDialog, ElButton } from 'element-plus'
import BaseForm from '@/base-ui/form'
import { isArray } from 'lodash-es'

const props = defineProps({
  modalConfig: {
    type: Object,
    default: () => ({}),
    required: true
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  },
  title: {
    type: String,
    default: ''
  }
})

const dialogVisible = ref(false)
const formData = ref<any>({})

watch(
  () => props.defaultInfo,
  () => {
    if (props.defaultInfo && isArray(props.modalConfig.formItems)) {
      props.modalConfig.formItems.forEach((item: any) => {
        formData.value[item.field] = props.defaultInfo[item.field]
      })
    }
  },
  { deep: true }
)

function setDialogVisible(value: boolean) {
  dialogVisible.value = value
}

defineExpose({
  setDialogVisible
})
</script>

<template>
  <div class="page-modal">
    <el-dialog :title="props.title" v-model="dialogVisible" width="30%" destroy-on-close>
      <base-form v-bind="props.modalConfig" v-model="formData" />
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="less"></style>
