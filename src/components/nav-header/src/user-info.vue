<script lang="ts" setup>
import { computed } from 'vue'
import { ElDropdown, ElDropdownMenu, ElDropdownItem, ElAvatar } from 'element-plus'
import { CircleClose, User, Setting } from '@element-plus/icons-vue'
import { useStore } from '@/vuexstore'

const store = useStore()
const userInfo = computed(() => store.state.login.userInfo)
</script>

<template>
  <div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        >
        </el-avatar>
        <span>{{ userInfo.name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :icon="CircleClose">退出登录</el-dropdown-item>
          <el-dropdown-item :icon="User" divided>用户信息</el-dropdown-item>
          <el-dropdown-item :icon="Setting">系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped lang="less">
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
  outline: none;
}
</style>
