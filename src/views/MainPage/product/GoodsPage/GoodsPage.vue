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
import PageModal from '@/components/page-modal'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/hooks/use-page-modal'

const store = useStore()
const { pageContentRef, handleReset, handleSearchData } = usePageSearch()
const { pageModalRef, defaultInfo, handleEditData, handleNewData, modalTitle } =
  usePageModal('商品')

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
</script>

<template>
  <div>
    <PageSearch
      @handleReset="handleReset"
      @handleSearchData="handleSearchData"
      :formConfig="formConfig"
    />
    <PageContent
      pageTitle="商品"
      ref="pageContentRef"
      pageName="goods"
      :contentTableConfig="contentTableConfig"
      @newDataClick="handleNewData"
      @editDataClick="handleEditData"
    >
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
    <PageModal
      :title="modalTitle"
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :modalConfig="modalConfig"
    />
  </div>
</template>

<style lang="less"></style>
