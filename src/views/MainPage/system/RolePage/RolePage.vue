<script lang="ts" setup>
import { contentTableConfig } from './config/content.config'
import { formConfig } from './config/search.config'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import { usePageSearch } from '@/hooks/usePageSearch'
defineExpose({
  contentTableConfig
})
const { pageContentRef, handleReset, handleSearchData } = usePageSearch()
</script>

<template>
  <page-search
    :formConfig="formConfig"
    @handleReset="handleReset"
    @handleSearchData="handleSearchData"
  />
  <page-content ref="pageContentRef" pageName="role" :contentTableConfig="contentTableConfig" />
</template>

<style lang="less"></style>
