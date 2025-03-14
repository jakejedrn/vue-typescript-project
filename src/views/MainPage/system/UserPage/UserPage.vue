<script lang="ts" setup>
import BaseForm from '@/base-ui/form'
import { formConfig } from './config/search.config'
const { formItems, labelWidth, itemStyle, colLayout } = formConfig
</script>

<template>
  <div class="user">
    <div class="search">
      <base-form
        ref="baseForm"
        :form-items="formItems"
        :item-style="itemStyle"
        :label-width="labelWidth"
        :colLayout="colLayout"
      ></base-form>
    </div>
  </div>
</template>

<style lang="less"></style>
