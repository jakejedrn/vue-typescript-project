<script lang="ts" setup>
import { ref, watch } from 'vue'
import BaseForm from '@/base-ui/form'
import { ElButton } from 'element-plus'
import { Search, Refresh } from '@element-plus/icons-vue'
import { isArray } from 'lodash-es'

const formData = ref({})
const props = defineProps({
  formConfig: {
    type: Object,
    default: () => {},
    required: true
  }
})

const emit = defineEmits(['handleReset', 'handleSearchData'])

watch(
  () => props.formConfig.formItems,
  () => {
    handleFormValue(props.formConfig.formItems)
  },
  { immediate: true }
)

function handleFormValue(formItems: any) {
  const formOrginData: any = {}
  if (isArray(formItems)) {
    for (let i = 0; i < formItems.length; i++) {
      const item = formItems[i]
      formOrginData[item.field] = ''
    }
    formData.value = formOrginData
  }
}

function handleReset() {
  handleFormValue(props.formConfig.formItems)
  emit('handleReset')
}

function handleSearchData() {
  emit('handleSearchData', formData.value)
}
</script>

<template>
  <div class="page-search">
    <base-form v-bind="props.formConfig" v-model="formData">
      <template #header>
        <h2 style="width: 100%">高级检索</h2>
      </template>
      <template #footer>
        <div class="footer">
          <el-button type="primary" :icon="Search" @click="handleSearchData">查询</el-button>
          <el-button :icon="Refresh" @click="handleReset">重置</el-button>
        </div>
      </template>
    </base-form>
  </div>
</template>

<style lang="less">
.page-search {
  width: 100%;
  height: 100%;
}
.footer {
  display: flex;
  justify-content: flex-end;
  padding: 0px 20px 20px 0px;
}
</style>
