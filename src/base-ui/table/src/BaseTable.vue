<script lang="ts" setup>
import { ElTable, ElTableColumn } from 'element-plus'
const props = defineProps({
  dataList: {
    type: Array,
    default: () => [],
    required: true
  },
  propList: {
    type: Array<any>,
    default: () => [],
    required: true
  }
})
</script>

<template>
  <el-table :data="dataList" :border="true">
    <template v-for="item in props.propList" :key="item.prop">
      <el-table-column v-bind="item">
        <template v-slot:default="scope">
          <slot :name="item.slotName" :row="scope.row">
            {{ scope.row[item.prop] }}
          </slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<style lang="less"></style>
