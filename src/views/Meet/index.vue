<template>
  <div class="meet-list">
    <div class="table-wrapper">
      <el-table :data="tableData" style="width: 100%" stripe="stripe" border="border">
        <el-table-column type="index" label="编号" width="80" align="center" />
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
    <el-dialog title="删除会议" :visible.sync="dialogVisible" width="30%">
      <span>是否删除</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="deleteCallback">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getMeetList, deleteMeet } from '@/api/meet'
export default {
  name: 'Meet',
  data() {
    return {
      dialogVisible: false,
      tableData: []
    }
  },
  async created() {
    await this.fetchRequest()
  },
  methods: {
    openDialog() {
      this.dialogVisible = true
    },
    closeDialog() {
      this.dialogVisible = false
    },
    deleteMeet(index, tableData) {
      this.currentIndex = index
      this.openDialog()
    },
    async deleteCallback() {
      const loading = this.$loading({
        lock: true,
        text: '删除中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.2)'
      })
      try {
        const { data } = await deleteMeet({
          meet_id: this.tableData[this.currentIndex].meet_id
        })
        console.log(data)
        if (data.noerr === 1) {
          throw new Error()
        }
        this.$message.success('删除成功')
        this.page = 1
        this.fetchRequest()
        this.closeDialog()
        loading.close()
      } catch (err) {
        this.$message.error('删除失败')
        loading.close()
      }
    },
    async fetchRequest() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.2)'
      })
      try {
        const { data } = await getMeetList()
        if (data.noerr === 1) {
          throw new Error()
        }
        this.tableData = data.data
        loading.close()
      } catch (err) {
        loading.close()
        this.$message.error('请求失败')
      }
    },
    updateMeet(index, tableData) {
      const id = tableData[index].meet_id
      this.$router.push(`/meet/edit/${id}`)
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
.table-wrapper {
  padding: 20px;
}
</style>
