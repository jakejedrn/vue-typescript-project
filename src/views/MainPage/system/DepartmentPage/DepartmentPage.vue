<template>
  <div class="department">
    <page-search
      @handleReset="handleReset"
      @handleSearchData="handleSearchData"
      :formConfig="formConfig"
    />
    <page-content
      pageTitle="部门"
      ref="pageContentRef"
      pageName="department"
      :contentTableConfig="contentTableConfig"
      @newDataClick="handleNewData"
      @editDataClick="handleEditData"
    />
    <page-modal
      :title="modalTitle"
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :modalConfig="modalConfig"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { contentTableConfig } from './config/content.config'
import { formConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { modalConfig } from './config/modal.config.ts'
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'DepartmentPage',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const { pageContentRef, handleReset, handleSearchData } = usePageSearch()
    const { pageModalRef, defaultInfo, handleEditData, handleNewData, modalTitle } =
      usePageModal('部门')
    return {
      formConfig,
      contentTableConfig,
      pageContentRef,
      handleReset,
      handleSearchData,
      pageModalRef,
      defaultInfo,
      handleEditData,
      handleNewData,
      modalConfig,
      modalTitle
    }
  }
})
</script>

<style scoped></style>
