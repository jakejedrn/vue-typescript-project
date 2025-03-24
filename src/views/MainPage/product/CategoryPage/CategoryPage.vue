<template>
  <div class="category">
    <page-search
      @handleReset="handleReset"
      @handleSearchData="handleSearchData"
      :formConfig="formConfig"
    />
    <page-content
      pageTitle="分类"
      ref="pageContentRef"
      pageName="category"
      :contentTableConfig="contentTableConfig"
      @newDataClick="handleNewData"
      @editDataClick="handleEditData"
    >
    </page-content>
    <page-modal
      :title="modalTitle"
      ref="pageModalRef"
      pageName="category"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfig"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import { contentTableConfig } from './config/content.config'
import { formConfig } from './config/search.config'
import { usePageSearch } from '@/hooks/usePageSearch'
import PageModal from '@/components/page-modal'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/hooks/use-page-modal'

const { pageContentRef, handleReset, handleSearchData } = usePageSearch()
const { pageModalRef, defaultInfo, handleEditData, handleNewData, modalTitle } =
  usePageModal('分类')

export default defineComponent({
  name: 'CategoryPage',
  components: {
    PageContent,
    PageSearch,
    PageModal
  },
  setup() {
    return {
      pageContentRef,
      handleReset,
      handleSearchData,
      formConfig,
      contentTableConfig,
      pageModalRef,
      defaultInfo,
      handleEditData,
      handleNewData,
      modalTitle,
      modalConfig
    }
  }
})
</script>

<style scoped></style>
