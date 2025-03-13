<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { ElForm, ElFormItem, ElInput, ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'

interface RuleForm {
  name: string
  password: string
}

const store = useStore()
const ruleFormRef = ref<FormInstance>()
const form = reactive<RuleForm>({
  name: localCache.getCache('userName') ?? '',
  password: localCache.getCache('userPassWord') ?? ''
})

const rules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9_]{3,16}$/,
      message: '允许字母、数字、下划线，长度在3到16个字符',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      // message: '至少8个字符，包含至少一个大写字母、一个小写字母和一个数字',
      // trigger: 'blur'
    }
  ]
})

const loginAction = (isKeepPassword: boolean) => {
  if (ruleFormRef.value) {
    ruleFormRef.value.validate((valid) => {
      if (valid) {
        if (isKeepPassword) {
          localCache.setCache('userName', form.name)
          localCache.setCache('userPassWord', form.password)
        } else {
          localCache.deleteCache('userName')
          localCache.deleteCache('userPassWord')
        }
        store.dispatch('login/accountLoginAction', { ...form })
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
    <el-form-item label="账号" prop="name">
      <el-input v-model="form.name" placeholder="请输入账号" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password" type="password" placeholder="请输入密码" show-password />
    </el-form-item>
  </el-form>
</template>

<style lang="less"></style>
