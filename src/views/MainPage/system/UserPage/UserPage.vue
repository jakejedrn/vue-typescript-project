<script lang="ts" setup>
import { formConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import { contentTableConfig } from './config/content.config'
import PageContent from '@/components/page-content'
import { usePageSearch } from '@/hooks/usePageSearch'
import PageModal from '@/components/page-modal'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/hooks/use-page-modal'

const { pageContentRef, handleReset, handleSearchData } = usePageSearch()
const { pageModalRef, defaultInfo, handleEditData, handleNewData, modalTitle } =
  usePageModal('用户')

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
    />
    <page-modal
      :title="modalTitle"
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :modalConfig="modalConfig"
    />
  </div>
</template>

<style lang="less"></style>
