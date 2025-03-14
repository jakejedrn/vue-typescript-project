<script lang="ts" setup>
import { ref } from 'vue'
import BaseForm from '@/base-ui/form'
import { ElButton } from 'element-plus'
import { Search, Refresh } from '@element-plus/icons-vue'

const formData = ref({
  id: '',
  name: '',
  realname: '',
  cellphone: '',
  enable: '',
  createAt: []
})
const props = defineProps({
  formConfig: {
    type: Object,
    default: () => {},
    required: true
  }
})
</script>

<template>
  <div class="page-search">
    <base-form v-bind="props.formConfig" v-model="formData">
      <template #header>
        <h2>高级检索</h2>
      </template>
      <template #footer>
        <div class="footer">
          <el-button type="primary" :icon="Search">查询</el-button>
          <el-button :icon="Refresh">重置</el-button>
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
</style>
