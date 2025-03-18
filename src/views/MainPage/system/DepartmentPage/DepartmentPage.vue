<template>
  <div class="department">
    <page-search :formConfig="formConfig" />
    <page-content pageName="department" :contentTableConfig="contentTableConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { contentTableConfig } from './config/content.config'
import { formConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

export default defineComponent({
  name: 'DepartmentPage',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    return {
      formConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
