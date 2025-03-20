<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import BaseTable from '@/base-ui/table'
import { Edit, Delete, Plus, Refresh } from '@element-plus/icons-vue'
import { ElButton } from 'element-plus'
import { useStore } from '@/vuexstore'
import { userPermissions } from '@/hooks/use-permission'

const store = useStore()
const props = defineProps({
  contentTableConfig: {
    type: Object,
    default: (): any => {}
  },
  pageName: {
    type: String,
    default: ''
  },
  dataCount: {
    type: Number,
    default: 0
  }
})

const baseSolts = ['status', 'createAt', 'updateAt', 'handler']

const isCreate = computed(() => {
  return userPermissions(props.pageName, 'create')
})
const isDelete = computed(() => {
  return userPermissions(props.pageName, 'delete')
})
const isUpdate = computed(() => {
  return userPermissions(props.pageName, 'update')
})
const isQuery = computed(() => {
  return userPermissions(props.pageName, 'query')
})

onMounted(() => {
  store.dispatch('system/getPageListAction', {
    pageName: props.pageName,
    queryInfo: { offset: 0, size: 10 }
  })
})

const pageInfo = ref({ currentPage: 1, pageSize: 10 })
const dataList = computed(() => store.getters[`system/pageListData`](props.pageName))
const dataCount = computed(() => store.getters[`system/pageListCount`](props.pageName))
const queryInfoBase = ref({})

watch(
  () => pageInfo,
  () => {
    getPageData(queryInfoBase.value)
  },
  { deep: true }
)

const otherPropSolts = computed(() => {
  return props.contentTableConfig?.propList?.filter(
    (item: any) => !baseSolts.includes(item.slotName)
  )
})

function onSelectChange(value: any) {
  console.log('=====================================')
  console.log(value)
  console.log('=====================================')
}

function getPageData(queryInfo?: object) {
  if (!isQUery.value) return
  queryInfoBase.value = queryInfo ? { ...queryInfo } : []
  store.dispatch('system/getPageListAction', {
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  })
}

function onRefresh() {
  pageInfo.value = {
    currentPage: 1,
    pageSize: 10
  }
}

defineExpose({
  getPageData
})
</script>

<template>
  <div class="page-content">
    <base-table
      :dataCount="dataCount"
      @selectionChange="onSelectChange"
      :dataList="dataList"
      v-bind="props.contentTableConfig"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <el-button v-if="isCreate" :icon="Plus" type="primary">新建用户</el-button>
        <el-button v-if="isDelete" :icon="Delete" type="danger">批量删除</el-button>
        <el-button v-if="isQuery" :icon="Refresh" type="primary" @click="onRefresh">刷新</el-button>
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
          <el-button v-if="isUpdate" :icon="Edit" size="small" type="text" plain>编辑</el-button>
          <el-button
            v-if="isDelete"
            class="delete-btn"
            :icon="Delete"
            size="small"
            type="text"
            plain
          >
            删除
          </el-button>
        </div>
      </template>
      <template v-for="item in otherPropSolts" :key="item.prop" #[item.slotName]="scope">
        <tmplate v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row">
            {{ scope.row[item.prop] }}
          </slot>
        </tmplate>
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
