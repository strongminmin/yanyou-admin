<template>
  <div class="advisory-list">
    <el-table :data="tableData" style="width: 100%" stripe="stripe" border="border">
      <el-table-column prop="advisory_id" label="编号" width="80" align="center" />
      <el-table-column prop="advisory_type" label="标签" align="center" />
      <el-table-column prop="advisory_title" label="标题" align="center" />
      <el-table-column prop="advisory_assess" label="访问量" align="center" />
      <el-table-column prop="advisory_source" label="来源" align="center" />
      <el-table-column prop="advisory_reward" label="打赏(次)" align="center" />
      <el-table-column prop="create_time" label="创建时间" align="center" />
      <el-table-column fixed="right" label="操作" width="120" align="center">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="updateAdvisory(scope.$index, tableData)"
            type="text"
            size="small"
          >修改</el-button>
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stripe: true,
      border: true,
      tableData: [
        {
          advisory_id: 0,
          advisory_type: '考研日报',
          advisory_title: '今天你学习了吗？',
          advisory_assess: '1000',
          advisory_source: '考研日报',
          advisory_reward: '123',
          create_time: '2020-01-01'
        }
      ]
    }
  },
  methods: {
    // 删除
    deleteRow(index, tableData) {
      // TODO：调删除接口
    },
    // 修改
    updateAdvisory(index, tableData) {
      const id = tableData[index].advisory_id
      this.$router.push(`/advisory/edit/${id}`)
    }
  }
}
</script>

