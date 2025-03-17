<script lang="ts" setup>
import { onMounted, computed } from 'vue'
import { ElButton } from 'element-plus'
import { useStore } from '@/vuexstore'
import { formConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import BaseTable from '@/base-ui/table'
import { dayjs } from 'element-plus'

const store = useStore()
const userList = computed(() => store.state.system.usersList)
// const userCount = computed(() => store.state.system.usersCount)
onMounted(() => {
  store.dispatch('system/getPageListAction', {
    pageUrl: '/users/list',
    queryInfo: { offset: 0, size: 10 }
  })
})

const propList = [
  { prop: 'name', label: '用户名', minWidth: '100', align: 'center' },
  { prop: 'realname', label: '真实姓名', minWidth: '100', align: 'center' },
  { prop: 'cellphone', label: '手机号码', minWidth: '120', align: 'center' },
  { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status', align: 'center' },
  { prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'createAt', align: 'center' },
  { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateAt', align: 'center' }
  // { label: '操作', width: '150', slotName: 'handler' }
]
</script>

<template>
  <div class="user">
    <div class="search">
      <page-search :formConfig="formConfig" />
    </div>
    <div class="content">
      <base-table :dataList="userList" :propList="propList">
        <template #status="scope">
          <el-button
            size="small"
            :plain="true"
            :type="scope.row.enable === 1 ? 'success' : 'danger'"
          >
            {{ scope.row.enable === 1 ? '启用' : '禁用' }}
          </el-button>
        </template>
        <template #createAt="scope">
          <span>{{ dayjs(scope.row.createAt).format('YYYY-MM-DD HH:mm:ss') }}</span>
        </template>
        <template #updateAt="scope">
          <span>{{ dayjs(scope.row.updateAt).format('YYYY-MM-DD HH:mm:ss') }}</span>
        </template>
      </base-table>
    </div>
  </div>
</template>

<style lang="less">
.footer {
  display: flex;
  justify-content: flex-end;
  padding: 0px 20px 20px 0px;
}
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
