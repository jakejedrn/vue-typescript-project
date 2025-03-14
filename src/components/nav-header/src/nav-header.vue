<script lang="ts" setup>
import { ref, defineEmits, computed } from 'vue'
import { ElIcon } from 'element-plus'
import { useRoute } from 'vue-router'
import { useStore } from '@/vuexstore'
import { Fold, Expand } from '@element-plus/icons-vue'
import UserInfo from './user-info.vue'
import BaseBreadcrumb from '@/base-ui/breadcrumb'
import { pathMapBreadcrumb } from '@/utils/map-menus'

const emit = defineEmits(['foldChange'])
const isFold = ref(false)

const store = useStore()
const userMenus = store.state.login.userMenus
const route = useRoute()
const breadcrumb = computed(() => {
  return pathMapBreadcrumb(userMenus, route.path)
})

function handleFoldChange() {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
  // 折叠菜单
}
</script>

<template>
  <div class="nav-header">
    <el-icon @click="handleFoldChange" class="fold-menu">
      <fold v-if="!isFold" />
      <expand v-else />
    </el-icon>
    <div class="content">
      <base-breadcrumb :breadcrumb="breadcrumb" />
      <user-info />
    </div>
  </div>
</template>

<style lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
