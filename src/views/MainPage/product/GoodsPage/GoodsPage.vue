<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { isArray } from 'lodash-es'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
import { usePageSearch } from '@/hooks/usePageSearch.ts'
import { formConfig } from './config/search.config'
import { ElImage } from 'element-plus'
import { useStore } from '@/vuexstore'
const store = useStore()
const { pageContentRef, handleReset, handleSearchData } = usePageSearch()

onMounted(() => {
  store.dispatch('system/getPageListAction', {
    pageName: 'category',
    queryInfo: {
      offset: 0,
      size: 100
    }
  })
})
const categoryListMap = computed(() => {
  const map = new Map()
  if (isArray(store.state.system.categoryList)) {
    store.state.system.categoryList.forEach((item: any) => {
      map.set(item.id, item.name)
    })
  }
  return map
})
console.log('=====================================')
console.log(categoryListMap)
console.log('=====================================')
</script>

<template>
  <div>
    <PageSearch
      @handleReset="handleReset"
      @handleSearchData="handleSearchData"
      :formConfig="formConfig"
    />
    <PageContent ref="pageContentRef" pageName="goods" :contentTableConfig="contentTableConfig">
      <template #image="scope">
        <el-image
          :z-index="9999"
          :src="scope.row.imgUrl"
          :preview-src-List="[scope.row.imgUrl]"
          style="width: 60px; height: 60px"
        />
      </template>
      <template #newPrice="scope">
        <span>{{ `￥${scope.row.newPrice}` }}</span>
      </template>
      <template #oldPrice="scope">
        <span>{{ `￥${scope.row.oldPrice}` }}</span>
      </template>
      <template #categoryId="scope">
        <span>{{ categoryListMap.get(scope.row.categoryId) || scope.row.categoryId }}</span>
      </template>
    </PageContent>
  </div>
</template>

<style lang="less"></style>
