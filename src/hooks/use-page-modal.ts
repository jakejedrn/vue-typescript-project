import { ref } from 'vue'
import PageModal from '@/components/page-modal'

const pageModalRef = ref<InstanceType<typeof PageModal>>()
const defaultInfo = ref({})
const modalTitle = ref('')
export function usePageModal(title?: string) {
  const handleNewData = () => {
    pageModalRef.value?.setDialogVisible(true)
    modalTitle.value = `新增${title}`
  }
  const handleEditData = (data: any) => {
    defaultInfo.value = { ...data }
    pageModalRef.value?.setDialogVisible(true)
    modalTitle.value = `编辑${title}`
  }

  return {
    pageModalRef,
    handleNewData,
    handleEditData,
    defaultInfo,
    modalTitle
  }
}
