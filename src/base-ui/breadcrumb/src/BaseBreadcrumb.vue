<script lang="ts" setup>
import { type PropType } from 'vue'
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'
import type { IBreadcrumb } from '../types'
const props = defineProps({
  breadcrumb: {
    type: Array as PropType<IBreadcrumb[]>
  }
})
</script>

<template>
  <div>
    <el-breadcrumb separator="/">
      <template v-for="item in props.breadcrumb" :key="item.path">
        <el-breadcrumb-item :to="{ path: item.path }">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<style lang="less"></style>
