<template>
  <div class="department">
    <page-search
      @handleReset="handleReset"
      @handleSearchData="handleSearchData"
      :formConfig="formConfig"
    />
    <page-content
      ref="pageContentRef"
      pageName="department"
      :contentTableConfig="contentTableConfig"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { contentTableConfig } from './config/content.config'
import { formConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'DepartmentPage',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const { pageContentRef, handleReset, handleSearchData } = usePageSearch()
    return {
      formConfig,
      contentTableConfig,
      pageContentRef,
      handleReset,
      handleSearchData
    }
  }
})
</script>

<style scoped></style>
