<template>
  <div class="menu">
    <page-search
      @handleReset="handleReset"
      @handleSearchData="handleSearchData"
      :formConfig="formConfig"
    />
    <page-content ref="pageContentRef" pageName="menu" :contentTableConfig="contentTableConfig">
      <template #menuType="scope">
        <span>{{ `${scope.row.type}级菜单` }}</span>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import { contentTableConfig } from './config/content.config'
import { formConfig } from './config/search.config'
import { usePageSearch } from '@/hooks/usePageSearch.ts'

export default defineComponent({
  name: 'MenuPage',
  components: {
    PageContent,
    PageSearch
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

<style scoped lang="less"></style>
