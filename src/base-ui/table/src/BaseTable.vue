<script lang="ts" setup>
import { ElTable, ElTableColumn, ElPagination } from 'element-plus'
const emit = defineEmits(['selectionChange', 'update:page'])
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
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectColumn: {
    type: Boolean,
    default: false
  },
  showFooter: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ''
  },
  dataCount: {
    type: Number,
    default: 0
  },
  page: {
    type: Object,
    default: () => ({ currentPage: 1, pageSize: 10 })
  },
  childrenProps: {
    type: Object,
    default: () => ({})
  }
})

function onSelectionChange(value: any) {
  emit('selectionChange', value)
}

function handleSizeChange(val: number) {
  emit('update:page', { ...props.page, pageSize: val })
}

function handleCurrentChange(val: number) {
  emit('update:page', { ...props.page, currentPage: val })
}
</script>

<template>
  <div class="header-class">
    <slot name="header">
      <div class="title">{{ props.title }}</div>
      <div class="handler">
        <slot name="headerHandler"></slot>
      </div>
    </slot>
  </div>
  <el-table
    @selection-change="onSelectionChange"
    :data="dataList"
    :border="true"
    v-bind="childrenProps"
  >
    <el-table-column v-if="props.showSelectColumn" type="selection" width="55" :align="'center'" />
    <el-table-column
      v-if="props.showIndexColumn"
      type="index"
      label="序号"
      :align="'center'"
      width="60"
    />
    <template v-for="item in props.propList" :key="item.prop">
      <el-table-column show-overflow-tooltip v-bind="item">
        <template v-slot:default="scope">
          <slot :name="item.slotName" :row="scope.row">
            {{ scope.row[item.prop] }}
          </slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
  <div class="footerClass" v-if="props.showFooter">
    <slot name="footer">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :total="props.dataCount"
        :page-size="props.page.pageSize"
        :current-page="props.page.currentPage"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </slot>
  </div>
</template>

<style lang="less">
.header-class {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footerClass {
  margin-top: 15px;

  .el-pagination {
    text-align: right;
  }
}
</style>
