<template>
  <div class="resource-container">
    <div class="resource-add">
      <el-button type="primary" @click="openDialog">
        上传
        <el-dialog
          title="资料上传"
          :visible.sync="dialogVisible"
          :before-close="handleClose"
          width="30%"
        >
          <el-form ref="ruleForm" :model="ruleForm" label-width="100px" class="rule-form">
            <el-form-item label="科目" prop="type">
              <el-input v-model="ruleForm.type" />
            </el-form-item>
            <el-form-item label="标题" prop="title">
              <el-input v-model="ruleForm.title" />
            </el-form-item>
            <el-form-item label="链接" prop="url">
              <el-input v-model="ruleForm.url" />
            </el-form-item>
            <el-form-item label="密钥" prop="ident">
              <el-input v-model="ruleForm.ident" />
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="requestCallback">上传</el-button>
          </span>
        </el-dialog>
      </el-button>
    </div>
    <div class="resource-table">
      <resource-table :table-data="tableData" @delete="refreshCallback" @upload="uploadCallback" />
    </div>
  </div>
</template>

<script>
import ResourceTable from '@/components/Resource/ResourceTable'
import {
  getResourceList,
  releaseResource,
  updateResource
} from '@/api/resource'
export default {
  name: 'Resource',
  components: {
    ResourceTable
  },
  data() {
    return {
      id: 0,
      btnTxt: '上传',
      ruleForm: {
        type: '',
        title: '',
        url: '',
        ident: ''
      },
      dialogVisible: false,
      tableData: []
    }
  },
  async created() {
    await this.getResourceList()
  },
  methods: {
    openDialog() {
      this.dialogVisible = true
    },
    closeDialog() {
      this.dialogVisible = false
      Object.keys(this.ruleForm).forEach(item => {
        this.ruleForm[item] = ''
      })
    },
    requestCallback() {
      if (this.id === 0) {
        this.releaseResource()
      } else {
        this.updateResource()
      }
    },
    uploadCallback(index) {
      this.ruleForm.type = this.tableData[index].resource_type
      this.ruleForm.title = this.tableData[index].resource_title
      this.ruleForm.url = this.tableData[index].resource_url
      this.ruleForm.ident = this.tableData[index].resource_ident
      this.id = this.tableData[index].resource_id
      this.openDialog()
    },
    async updateResource() {
      const loading = this.$loading({
        lock: true,
        text: '加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.2)'
      })
      try {
        const { data } = await updateResource({
          resource_id: this.id,
          resource_type: this.ruleForm.type,
          resource_title: this.ruleForm.title,
          resource_url: this.ruleForm.url,
          resource_ident: this.ruleForm.ident
        })
        if (data.noerr === 1) {
          throw new Error()
        }
        this.getResourceList()
        this.$message.success('更新成功')
      } catch (err) {
        this.$message.error('更新失败')
      } finally {
        this.closeDialog()
        loading.close()
        this.id = 0
      }
    },
    async releaseResource() {
      const loading = this.$loading({
        lock: true,
        text: '加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.2)'
      })
      try {
        const { data } = await releaseResource({
          resource_type: this.ruleForm.type,
          resource_title: this.ruleForm.title,
          resource_url: this.ruleForm.url,
          resource_ident: this.ruleForm.ident
        })
        console.log(data)
        if (data.noerr === 1) {
          throw new Error()
        }
        this.$message.success('上传成功')
        this.getResourceList()
      } catch (err) {
        this.$message.error('上传失败')
      } finally {
        this.closeDialog()
        loading.close()
        this.id = 0
      }
    },
    async getResourceList() {
      const loading = this.$loading({
        lock: true,
        text: '加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.2)'
      })
      try {
        const { data } = await getResourceList()
        if (data.noerr === 1) {
          throw new Error()
        }
        const result = Object.keys(data.data).reduce((prev, item) => {
          return prev.concat(data.data[item])
        }, [])
        this.tableData = result
        loading.close()
      } catch (err) {
        loading.close()
        this.$message.error('网络请求失败')
      }
    },
    refreshCallback() {
      this.getResourceList()
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.id = 0
          Object.keys(this.ruleForm).forEach(item => {
            console.log(this.ruleForm[item])
            this.ruleForm[item] = ''
          })
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<style lang="scss" scoped>
.resource {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
  &-table {
    height: 100px;
    margin-top: 10px;
  }
  &-upload {
    position: absolute;
    filter: alpha(opacity=0);
    opacity: 0;
    width: 30px;
  }
}
.rule-form {
  padding-right: 30px;
}
</style>
