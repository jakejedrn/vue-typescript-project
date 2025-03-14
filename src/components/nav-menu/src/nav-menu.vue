<script lang="ts" setup>
import { ElMenu, ElSubMenu, ElMenuItem, ElIcon } from 'element-plus'
import { Monitor, Setting, Goods, ChatLineRound } from '@element-plus/icons-vue'
import { computed, ref } from 'vue'
import { useStore } from '@/vuexstore'
import { useRouter, useRoute } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menus'

const props = defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
})

const store = useStore()
const router = useRouter()
const route = useRoute()
const userMenuList = computed(() => store.state.login.userMenus)

const menu = pathMapToMenu(userMenuList.value, route.path)
const defaultValue = ref(menu ? `${menu.id}` : '2')

function handleMenuItemClick(item: any) {
  router.push({ path: item.url ?? '/not-found' })
}
</script>

<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="" />
      <span class="title" v-if="!props.collapse">Vue3+TS</span>
    </div>
    <el-menu
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :default-active="defaultValue"
      :collapse="props.collapse"
    >
      <template v-for="(item, index) in userMenuList" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="`${item.id}`" :key="item.id">
            <template #title>
              <el-icon>
                <template v-if="index === 0"><monitor /> </template>
                <template v-else-if="index === 1"><setting /> </template>
                <template v-else-if="index === 2"><goods /> </template>
                <template v-else-if="index === 3"><chat-line-round /> </template>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 二级菜单 -->
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item :index="`${subItem.id}`" @click="handleMenuItemClick(subItem)">
                <el-icon><component :is="subItem.icon" /></el-icon>
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <template>
            <el-menu-item :index="`${item.id}`" @click="handleMenuItemClick(item)">
              <el-icon><component :is="item.icon" /></el-icon>
              <span>{{ item.name }}</span>
            </el-menu-item>
          </template>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<style lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
