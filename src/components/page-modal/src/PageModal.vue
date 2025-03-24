<script lang="ts" setup>
import { ref, watch } from 'vue'
import { ElDialog, ElButton } from 'element-plus'
import BaseForm from '@/base-ui/form'
import { isArray } from 'lodash-es'
import { useStore } from '@/vuexstore'

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
  },
  pageName: {
    type: String,
    default: '',
    required: true
  }
})

const dialogVisible = ref(false)
const formData = ref<any>({})
const store = useStore()

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

function onConfirm() {
  if (Object.keys(props.defaultInfo).length === 0) {
    // 新建
    store.dispatch(`system/createPageDataAction`, {
      pageName: props.pageName,
      newData: { ...formData.value }
    })
  } else {
    // 编辑
    store.dispatch(`system/editPageDataAction`, {
      pageName: props.pageName,
      editData: { ...formData.value },
      id: props.defaultInfo.id
    })
  }
  onCancel()
}

function onCancel() {
  dialogVisible.value = false
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
        <el-button @click="onCancel">取消</el-button>
        <el-button type="primary" @click="onConfirm">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="less"></style>
