import { useStore } from '@/vuexstore'
export function userPermissions(pageName: string, actionName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermissions = `system:${pageName}:${actionName}`
  return !!permissions.find((item) => item === verifyPermissions)
}
