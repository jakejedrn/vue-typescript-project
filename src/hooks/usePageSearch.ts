import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  function handleSearchData(queryInfo: any) {
    pageContentRef.value?.getPageData(queryInfo)
  }
  function handleReset() {
    pageContentRef.value?.getPageData()
  }

  return { pageContentRef, handleReset, handleSearchData }
}
