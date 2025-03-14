import type { IBreadcrumb } from '@/base-ui/breadcrumb/types'
import type { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null

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
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        loopMenu(menu.children)
      }
    })
  }
  loopMenu(userMenus)
  return allRoutes
}

export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  let currntMenu: any
  const loopMenu = (list: any[], path: string, parentMenu?: any) => {
    for (const menu of list) {
      if (menu.url === path) {
        currntMenu = menu
        if (parentMenu && breadcrumbs) {
          breadcrumbs.push({ name: parentMenu.name })
          breadcrumbs.push({ name: menu.name, path: menu.url })
        }
        break
      } else {
        loopMenu(menu.children ?? [], path, menu)
      }
    }
  }
  loopMenu(userMenus, currentPath)
  return currntMenu
}

export function pathMapBreadcrumb(userMenus: any[], currentPath: string): IBreadcrumb[] {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

export { firstMenu }
