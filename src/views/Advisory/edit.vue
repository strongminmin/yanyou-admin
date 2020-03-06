<template>
  <div class="edit">
    <div class="edit-wrapper">
      热点标签：
      <el-input v-model="tag" class="edit-wrapper-input" />
    </div>
    <div class="edit-wrapper">
      热点来源：
      <el-input v-model="origin" class="edit-wrapper-input" />
    </div>
    <div class="edit-wrapper">
      热点题目：
      <el-input v-model="title" class="edit-wrapper-input" />
    </div>
    <div class="edit-wrapper">
      <div class="upload-container">
        <el-upload
          v-if="!bannerUrl"
          :data="dataObj"
          :multiple="false"
          :show-file-list="false"
          :on-success="handleBannerSuccess"
          class="image-uploader"
          drag
          action="https://httpbin.org/post"
        >
          <i class="el-icon-upload" />
          <div class="el-upload__text">
            内容展示图：将文件拖到此处，或
            <em>点击上传</em>
          </div>
        </el-upload>
        <div
          v-if="bannerUrl"
          class="image-preview"
          :style="{backgroundImage: 'url(' + bannerUrl + ')'}"
        >
          <div class="image-preview-action" @click="removeBanner">
            <i class="el-icon-delete" />
          </div>
        </div>
      </div>
    </div>
    <div class="edit-tinymce-wrapper">
      <div class="edit-tinymce">
        <Tinymce ref="editor" v-model="content" :width="700" :height="400" />
      </div>
    </div>
    <div class="edit-release-wrapper">
      <el-button type="primary" @click="createAdvisory">发布</el-button>
    </div>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
export default {
  components: {
    Tinymce
  },
  data() {
    return {
      tag: '',
      title: '',
      origin: '',
      content: '',
      bannerUrl: '',
      dataObj: {
        token: '',
        key: ''
      }
    }
  },
  methods: {
    async createAdvisory() {
      const advisoryInfo = {
        advisory_type: this.tag,
        advisory_title: this.title,
        advisory_origin: this.origin,
        advisory_banner: this.bannerUrl,
        advisory_content: this.content
      }
      try {
        console.log(advisoryInfo)
        this.$message.success('发布成功')
      } catch (err) {
        this.$message.error('发布失败')
      }
    },
    handleBannerSuccess(data) {
      const base64 = data.files.file
      this.bannerUrl = base64
    },
    removeBanner() {
      this.bannerUrl = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.edit {
  padding-left: 200px;
  padding-top: 20px;
  padding-bottom: 20px;
  .edit-wrapper {
    margin-top: 20px;
    display: flex;
    align-items: center;
    &-input {
      width: 60%;
    }
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
  &-tinymce-wrapper {
    margin-top: 80px;
  }
  &-tinymce {
    width: 700px;
    margin-left: 80px;
  }
  &-release-wrapper {
    width: 100%;
    margin: 20px 30%;
  }
}
</style>
