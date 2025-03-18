<script lang="ts" setup>
import { formConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import { contentTableConfig } from './config/content.config'
import PageContent from '@/components/page-content'

defineExpose({
  contentTableConfig
})
</script>

<template>
  <div class="user">
    <div class="search">
      <page-search :formConfig="formConfig" />
    </div>
    <div>
      <page-content pageName="users" :contentTableConfig="contentTableConfig" />
    </div>
  </div>
</template>

<style lang="less">
.footer {
  display: flex;
  justify-content: flex-end;
  padding: 0px 20px 20px 0px;
}
</style>
