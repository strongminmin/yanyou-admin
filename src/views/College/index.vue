<template>
  <div class="college-list">
    <el-table :data="tableData" style="width: 100%" stripe="stripe" border="border">
      <el-table-column type="index" label="编号" width="80" align="center" />
      <el-table-column prop="college_name" label="院校名称" align="center" />
      <el-table-column prop="college_local" label="所在地" align="center" />
      <el-table-column fixed="right" label="操作" width="120" align="center">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click.native.prevent="updateCollege(scope.$index, tableData)"
          >修改</el-button>
          <el-button
            type="text"
            size="small"
            @click.native.prevent="showDeleteDialog(scope.$index, tableData)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="删除热点" :visible.sync="dialogVisible" width="30%">
      <span>是否删除</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="deleteCallback">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getCollegeList, deleteCollege } from '@/api/college'
export default {
  name: 'College',
  data() {
    return {
      collgeeId: 0,
      dialogVisible: false,
      tableData: []
    }
  },
  created() {
    this.fetchRequest()
  },
  methods: {
    closeDialog() {
      this.dialogVisible = false
    },
    openDialog() {
      this.dialogVisible = true
    },
    async fetchRequest() {
      const loading = this.$loading({
        lock: true,
        text: '发布中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.2)'
      })
      try {
        const { data } = await getCollegeList()
        if (data.noerr === 1) {
          throw new Error()
        }
        this.tableData = data.data
      } catch (err) {
        this.$message.error('获取失败')
      } finally {
        loading.close()
      }
    },
    updateCollege(index, tableData) {
      const id = tableData[index].college_id
      this.$router.push(`/college/edit/${id}`)
    },
    showDeleteDialog(index, tableData) {
      this.openDialog()
      this.collgeeId = tableData[index].college_id
    },
    async deleteCallback() {
      const loading = this.$loading({
        lock: true,
        text: '发布中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.2)'
      })
      try {
        const { data } = await deleteCollege({
          college_id: this.collgeeId
        })
        if (data.noerr === 1) {
          throw new Error()
        }
        this.$message.success('删除成功')
        await this.fetchRequest()
      } catch (err) {
        this.$message.error('删除失败')
      } finally {
        loading.close()
        this.closeDialog()
      }
    }
  }

}
</script>
