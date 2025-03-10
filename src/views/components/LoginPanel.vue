<script lang="ts" setup>
import { ref } from 'vue'
import LoginAccount from './LoginAccount.vue'
import LoginPhone from './LoginPhone.vue'
import { UserFilled, Iphone } from '@element-plus/icons-vue'
import { ElTabs, ElTabPane, ElIcon, ElCheckbox, ElLink, ElButton } from 'element-plus'

const isKeepPassword = ref(true)
const tabKey = ref('account')
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const phoneRef = ref<InstanceType<typeof LoginPhone>>()

const handleLogin = () => {
  if (tabKey.value === 'phone') {
    phoneRef?.value?.loginAction(isKeepPassword.value)
  } else {
    accountRef?.value?.loginAction(isKeepPassword.value)
  }
}
</script>

<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs v-model="tabKey" type="border-card" class="login-tabs" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLogin">立即登录</el-button>
  </div>
</template>

<style lang="less">
.account-control {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.login-panel {
  margin-bottom: 150px;
  width: 320px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
  // .login-tabs > .el-tabs__content {
  //   // padding: 32px;
  //   // color: #6b778c;
  //   // font-size: 32px;
  //   font-weight: 600;
  // }
  .login-tabs .custom-tabs-label .el-icon {
    vertical-align: middle;
  }
  .login-tabs .custom-tabs-label span {
    vertical-align: middle;
    margin-left: 4px;
  }
}
</style>
