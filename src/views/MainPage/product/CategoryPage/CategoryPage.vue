<template>
  <div class="category">
    <page-search
      @handleReset="handleReset"
      @handleSearchData="handleSearchData"
      :formConfig="formConfig"
    />
    <page-content ref="pageContentRef" pageName="category" :contentTableConfig="contentTableConfig">
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import { contentTableConfig } from './config/content.config'
import { formConfig } from './config/search.config'
import { usePageSearch } from '@/hooks/usePageSearch'
const { pageContentRef, handleReset, handleSearchData } = usePageSearch()

export default defineComponent({
  name: 'CategoryPage',
  components: {
    PageContent,
    PageSearch
  },
  setup() {
    return {
      pageContentRef,
      handleReset,
      handleSearchData,
      formConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
