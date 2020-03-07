<template>
  <div class="college-list">
    <el-table :data="tableData" style="width: 100%" stripe="stripe" border="border">
      <el-table-column prop="college_id" label="编号" width="80" align="center" />
      <el-table-column prop="college_name" label="院校名称" align="center" />
      <el-table-column prop="college_local" label="所在地" align="center" />
      <el-table-column fixed="right" label="操作" width="120" align="center">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="updateCollege(scope.$index, tableData)"
            type="text"
            size="small"
          >修改</el-button>
          <el-button
            @click.native.prevent="deleteCollege(scope.$index, tableData)"
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
  name: 'College',
  data() {
    return {
      tableData: [
        {
          college_id: 1,
          college_name: '清华大学',
          college_local: '北京'
        },
        {
          college_id: 1,
          college_name: '清华大学',
          college_local: '北京'
        },
        {
          college_id: 1,
          college_name: '清华大学',
          college_local: '北京'
        }
      ]
    }
  },
  async create() {
    const data = await this.fetchRequest()
    console.log(data)
  },
  methods: {
    async fetchRequest() {

    },
    updateCollege(index, tableData) {
      const id = tableData[index].college_id
      this.$router.push(`/college/edit/${id}`)
    },
    deleteCollege(index, tableData) {
      console.log(index, tableData)
    }
  }

}
</script>
