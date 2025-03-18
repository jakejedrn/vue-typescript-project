<script lang="ts" setup>
import { contentTableConfig } from './config/content.config'
import { formConfig } from './config/search.config'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
defineExpose({
  contentTableConfig
})
</script>

<template>
  <page-search :formConfig="formConfig" />
  <page-content pageName="role" :contentTableConfig="contentTableConfig" />
</template>

<style lang="less"></style>
