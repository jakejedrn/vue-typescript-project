<script lang="ts" setup>
import { contentTableConfig } from './config/content.config'
import { formConfig } from './config/search.config'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import { usePageSearch } from '@/hooks/usePageSearch'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/hooks/use-page-modal'
import PageModal from '@/components/page-modal'

defineExpose({
  contentTableConfig
})
const { pageContentRef, handleReset, handleSearchData } = usePageSearch()
const { pageModalRef, defaultInfo, handleEditData, handleNewData, modalTitle } =
  usePageModal('角色')
</script>

<template>
  <page-search
    :formConfig="formConfig"
    @handleReset="handleReset"
    @handleSearchData="handleSearchData"
  />
  <page-content
    pageTitle="角色"
    @newDataClick="handleNewData"
    @editDataClick="handleEditData"
    ref="pageContentRef"
    pageName="role"
    :contentTableConfig="contentTableConfig"
  />
  <page-modal
    :title="modalTitle"
    :defaultInfo="defaultInfo"
    ref="pageModalRef"
    pageName="role"
    :modalConfig="modalConfig"
  />
</template>

<style lang="less"></style>
