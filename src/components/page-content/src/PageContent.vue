<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import BaseTable from '@/base-ui/table'
import { Edit, Delete, Plus, Refresh } from '@element-plus/icons-vue'
import { ElButton } from 'element-plus'
import { useStore } from '@/vuexstore'

const store = useStore()
const props = defineProps({
  contentTableConfig: {
    type: Object,
    default: (): any => {}
  },
  pageName: {
    type: String,
    default: ''
  }
})

onMounted(() => {
  store.dispatch('system/getPageListAction', {
    pageName: props.pageName,
    queryInfo: { offset: 0, size: 10 }
  })
})

const dataList = computed(() => store.getters[`system/pageListData`](props.pageName))
const dataCount = computed(() => store.getters[`system/pageListCount`](props.pageName))

function onSelectChange(value: any) {
  console.log('=====================================')
  console.log(value)
  console.log('=====================================')
}
</script>

<template>
  <div class="page-content">
    <base-table
      :dataCount="dataCount"
      @selectionChange="onSelectChange"
      :dataList="dataList"
      v-bind="props.contentTableConfig"
    >
      <template #headerHandler>
        <el-button :icon="Plus" type="primary">新建用户</el-button>
        <el-button :icon="Delete" type="danger">批量删除</el-button>
        <el-button :icon="Refresh" type="primary">刷新</el-button>
      </template>

      <template #status="scope">
        <el-button size="small" :plain="true" :type="scope.row.enable === 1 ? 'success' : 'danger'">
          {{ scope.row.enable === 1 ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="handler-btns">
          <el-button :icon="Edit" size="small" type="text" plain>编辑</el-button>
          <el-button class="delete-btn" :icon="Delete" size="small" type="text" plain>
            删除
          </el-button>
        </div>
      </template>
    </base-table>
  </div>
</template>

<style lang="less">
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
.handler-btns {
  display: flex;
  width: 100%;
  align-items: center;
}
.delete-btn {
  color: #f56c6c;
}
</style>
