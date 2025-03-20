<script lang="ts" setup>
import { formConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import { contentTableConfig } from './config/content.config'
import PageContent from '@/components/page-content'
import { usePageSearch } from '@/hooks/usePageSearch'

defineExpose({
  contentTableConfig
})

const { pageContentRef, handleReset, handleSearchData } = usePageSearch()
</script>

<template>
  <div class="user">
    <page-search
      @handleReset="handleReset"
      @handleSearchData="handleSearchData"
      :formConfig="formConfig"
    />
    <page-content ref="pageContentRef" pageName="users" :contentTableConfig="contentTableConfig" />
  </div>
</template>

<style lang="less"></style>
