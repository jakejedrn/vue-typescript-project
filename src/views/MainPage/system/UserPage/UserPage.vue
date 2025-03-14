<script lang="ts" setup>
import { formConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
</script>

<template>
  <div class="user">
    <div class="search">
      <page-search :formConfig="formConfig" />
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
