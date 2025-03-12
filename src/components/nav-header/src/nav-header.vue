<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
import { ElIcon } from 'element-plus'
import { Fold, Expand } from '@element-plus/icons-vue'

const emit = defineEmits(['foldChange'])
const isFold = ref(false)
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
