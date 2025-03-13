import type { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const allRoutes: RouteRecordRaw[] = []
  const routes: RouteRecordRaw[] = []
  const routeFiles = import.meta.glob('../router/main/**/*.ts', { eager: true })
  Object.keys(routeFiles).forEach((key) => {
    const route = (routeFiles as Recordable)[key].default || {}
    allRoutes.push(route)
  })
  const loopMenu = (list: any[]) => {
    list.forEach((menu) => {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) {
          routes.push(route)
        }
      } else {
        loopMenu(menu.children)
      }
    })
  }
  loopMenu(userMenus)
  return allRoutes
}
