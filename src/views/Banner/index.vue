<template>
  <div class="banner-container">
    <div class="banner-add">
      <el-button type="primary" @click="openUploadDialog">
        上传
        <el-dialog
          title="图片上传"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
        >
          <upload ref="upload" @upload="uploadCallback" />
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="uploaRequest">上传</el-button>
          </span>
        </el-dialog>
      </el-button>
    </div>
    <div class="banner-table">
      <banner-table :table-data="tableData" @delete="deleteSuccessCallback" />
    </div>
  </div>
</template>

<script>
import BannerTable from '@/components/Banner/BannerTable'
import Upload from '@/components/Upload/index'
import { uploadBanner, getBannerList } from '@/api/banner'
export default {
  name: 'Banner',
  components: {
    BannerTable,
    Upload
  },
  data() {
    return {
      dialogVisible: false,
      bannerFile: '',
      tableData: []
    }
  },
  async created() {
    await this.getBannerList()
  },
  methods: {
    openUploadDialog() {
      this.dialogVisible = true
    },
    closeUploadDialog() {
      this.dialogVisible = false
    },
    uploadCallback(file) {
      this.bannerFile = file
    },
    async deleteSuccessCallback() {
      await this.getBannerList()
    },
    async getBannerList() {
      try {
        const { data } = await getBannerList()
        if (data.noerr === 1) {
          throw new Error()
        }
        this.tableData = data.data
      } catch (err) {
        this.$message.error('网络请求失败')
      }
    },
    async uploaRequest() {
      const loading = this.$loading({
        lock: true,
        text: '上传中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.2)'
      })
      try {
        const { data } = await uploadBanner({
          banner_image: this.bannerFile
        })
        if (data.noerr === 1) {
          throw new Error()
        } else {
          this.$message.success('上传成功')
          this.bannerFile = ''
          this.$refs['upload'].clean()
          await this.getBannerList()
        }
        loading.close()
        this.closeUploadDialog()
      } catch (err) {
        loading.close()
        this.$message.error('上传失败')
      }
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
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
    background-color: red;
  }
  &-upload {
    position: absolute;
    filter: alpha(opacity=0);
    opacity: 0;
    width: 30px;
  }
  .image-uploader {
    width: 300px;
    height: 150px;
    margin-left: 250px;
  }
  .image-preview {
    width: 400px;
    height: 200px;
    margin-left: 200px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    position: relative;
  }
  .image-preview-action {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.16);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.16);
    cursor: pointer;
  }
  .el-icon-delete {
    color: rgba(255, 255, 255, 1);
    font-size: 22px;
  }
}
</style>
