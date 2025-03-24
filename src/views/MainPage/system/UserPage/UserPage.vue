<script lang="ts" setup>
import { computed } from 'vue'
import { formConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import { contentTableConfig } from './config/content.config'
import PageContent from '@/components/page-content'
import { usePageSearch } from '@/hooks/usePageSearch'
import PageModal from '@/components/page-modal'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/hooks/use-page-modal'
import { useStore } from '@/vuexstore'
import { isArray } from 'lodash-es'

const store = useStore()

const { pageContentRef, handleReset, handleSearchData } = usePageSearch()
const { pageModalRef, defaultInfo, handleEditData, handleNewData, modalTitle } = usePageModal(
  '用户',
  newDataCallback,
  editDataCallback
)

const modalConfigComputed = computed(() => {
  const departItem = modalConfig.formItems.find((item) => item.field === 'departmentId')
  const roleItem = modalConfig.formItems.find((item) => item.field === 'roleId')
  departItem!.options = getOptions(store.state.entireDepartment)
  roleItem!.options = getOptions(store.state.entireRole)
  return modalConfig
})

const departListMap = computed(() => {
  const map = new Map()
  if (isArray(store.state.entireDepartment)) {
    store.state.entireDepartment.forEach((item: any) => {
      map.set(item.id, item.name)
    })
  }
  return map
})
const roleListMap = computed(() => {
  const map = new Map()
  if (isArray(store.state.entireRole)) {
    store.state.entireRole.forEach((item: any) => {
      map.set(item.id, item.name)
    })
  }
  return map
})

function getOptions(list: any[]) {
  const options: any[] = []
  list.forEach((item) => {
    options.push({
      label: item.name,
      value: item.id
    })
  })
  return options
}

function newDataCallback() {
  const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
  passwordItem!.isHidden = false
}

function editDataCallback() {
  const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
  passwordItem!.isHidden = true
}

defineExpose({
  contentTableConfig
})
</script>

<template>
  <div class="user">
    <page-search
      @handleReset="handleReset"
      @handleSearchData="handleSearchData"
      :formConfig="formConfig"
    />
    <page-content
      @newDataClick="handleNewData"
      @editDataClick="handleEditData"
      ref="pageContentRef"
      pageName="users"
      :contentTableConfig="contentTableConfig"
      pageTitle="用户"
    >
      <template #departmentId="scope">
        <span>{{ departListMap.get(scope.row.departmentId) || scope.row.departmentId }}</span>
      </template>
      <template #roleId="scope">
        <span>{{ roleListMap.get(scope.row.roleId) || scope.row.roleId }}</span>
      </template>
    </page-content>
    <page-modal
      :title="modalTitle"
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      pageName="users"
      :modalConfig="modalConfigComputed"
    />
  </div>
</template>

<style lang="less"></style>
