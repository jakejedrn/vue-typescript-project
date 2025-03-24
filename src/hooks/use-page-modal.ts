import { ref } from 'vue'
import PageModal from '@/components/page-modal'

const pageModalRef = ref<InstanceType<typeof PageModal>>()
const defaultInfo = ref({})
const modalTitle = ref('')

type CallbackType = () => void
export function usePageModal(
  title?: string,
  newCallback?: CallbackType,
  editCallback?: CallbackType
) {
  const handleNewData = () => {
    pageModalRef.value?.setDialogVisible(true)
    defaultInfo.value = {}
    modalTitle.value = `新增${title}`
    if (newCallback) {
      newCallback()
    }
  }

  const handleEditData = (data: any) => {
    defaultInfo.value = { ...data }
    pageModalRef.value?.setDialogVisible(true)
    modalTitle.value = `编辑${title}`
    if (editCallback) {
      editCallback()
    }
  }

  return {
    pageModalRef,
    handleNewData,
    handleEditData,
    defaultInfo,
    modalTitle
  }
}
