<script lang="ts" setup>
import { ref, reactive, defineExpose } from 'vue'
import { ElForm, ElFormItem, ElInput, ElButton, ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
  phone: string
  verifyCode: string
}
const ruleFormRef = ref<FormInstance>()
const form = reactive<RuleForm>({
  phone: '',
  verifyCode: ''
})
const rules = reactive<FormRules>({
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: '手机号不符合规则',
      trigger: 'blur'
    }
  ],
  verifyCode: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    {
      pattern: /^[A-Za-z0-9]{4,6}$/,
      message: '验证码错误',
      trigger: 'blur'
    }
  ]
})

const loginAction = (isKeepPassword: boolean) => {
  if (ruleFormRef.value) {
    ruleFormRef.value.validate((valid) => {
      if (valid) {
      } else {
        ElMessage.error('请输入正确的信息')
      }
    })
  }
}

defineExpose({
  loginAction
})
</script>

<template>
  <el-form ref="ruleFormRef" :rules="rules" :model="form">
    <el-form-item label="手机号" prop="phone">
      <el-input v-model="form.phone" placeholder="请输入账号" />
    </el-form-item>
    <el-form-item label="验证码" prop="verifyCode">
      <div class="get-code">
        <el-input v-model="form.verifyCode" placeholder="请输入验证码" />
        <el-button type="primary" class="get-btn">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<style lang="less">
.get-code {
  display: flex;
}
.get-btn {
  margin-left: 10px;
}
</style>
