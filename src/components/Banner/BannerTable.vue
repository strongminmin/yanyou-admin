<template>
  <el-table :data="tableData" style="width: 100%" stripe="stripe" border="border">
    <el-table-column prop="banner_id" label="编号" width="120" align="center" />
    <el-table-column prop="banner_url" label="图片地址" align="center" />
    <el-table-column fixed="right" label="操作" width="120" align="center">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small"
        >移除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      stripe: true,
      border: true
    }
  },
  methods: {
    // 删除图片
    deleteRow(index, tableData) {
      console.log(index)
      console.log(tableData)
    }
  }
}
</script>

