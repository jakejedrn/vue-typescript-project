<template>
  <div class="menu">
    <page-search :formConfig="formConfig" />
    <page-content pageName="menu" :contentTableConfig="contentTableConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import { contentTableConfig } from './config/content.config'
import { formConfig } from './config/search.config'
export default defineComponent({
  name: 'MenuPage',
  components: {
    PageContent,
    PageSearch
  },
  setup() {
    return {
      formConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
