<template>
  <div class="meet-list">
    <el-table :data="tableData" style="width: 100%" stripe="stripe" border="border">
      <el-table-column prop="meet_id" label="编号" width="80" align="center" />
      <el-table-column prop="meet_title" label="会议标题" align="center" />
      <el-table-column prop="meet_access" label="访问量" align="center" />
      <el-table-column prop="create_time" label="创建时间" align="center" />
      <el-table-column fixed="right" label="操作" width="120" align="center">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click.native.prevent="updateMeet(scope.$index, tableData)"
          >修改</el-button>
          <el-button
            type="text"
            size="small"
            @click.native.prevent="deleteMeet(scope.$index, tableData)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Meet',
  data() {
    return {
      tableData: [
        {
          meet_id: 1,
          meet_title: '会议名称',
          meet_access: '100',
          create_time: '2020-01-01'
        }
      ]
    }
  },
  async created() {
    const data = await this.fetchRequest()
    console.log(data)
  },
  methods: {
    async fetchRequest() {
      try {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.2)'
        })
        setTimeout(() => {
          this.$message.success('请求成功')
          loading.close()
        })
      } catch (err) {
        this.$message.error('请求失败')
      }
    },
    updateMeet(index, tableData) {
      console.log(index, tableData)
      const id = tableData[index].meet_id
      this.$router.push(`/meet/edit/${id}`)
    },
    deleteMeet(index, tableData) {
      console.log(index, tableData)
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
