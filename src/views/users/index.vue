<template>
  <el-card>
    <el-row :gutter="20" class="header">
      <el-col :span="7">
        <el-input
          placeholder="请输入"
          clearable
          v-model="queryForm.name"
        ></el-input>
      </el-col>
      <el-button type="primary" :icon="Search">搜索</el-button>
      <el-button type="primary">添加用户</el-button>
    </el-row>

    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column
        v-for="(item, index) in options"
        :width="item.width"
        :key="index"
        :prop="item.prop"
        :label="item.label"
      >
        <template v-slot="{ row }" v-if="item.prop === 'mg_state'">
          <el-switch v-model="row.mg_state" />
        </template>
        <template #default v-else-if="item.prop === 'action'">
          <el-button type="primary" size="small" :icon="Setting">详情</el-button>
          <el-button type="primary" size="small" :icon="Edit">修改</el-button>
          <el-button type="primary" size="small" :icon="Delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { getUsers } from '@/api/user'
import { options } from './options'
import { Search, Edit, Delete, Setting } from '@element-plus/icons-vue'
const queryForm = reactive({
  query: '',
  pagenum: 1,
  pagesize: 10
})

const tableData = ref([])

const initGetlist = async () => {
  try {
    const res = await getUsers(queryForm)
    console.log(res)
    tableData.value = res.users
  } catch (error) {
    console.log('error', error)
  }
}

initGetlist()
</script>

<style lang="scss" scoped>
.header {
  padding-bottom: 16px;
  box-sizing: border-box;
}
</style>
