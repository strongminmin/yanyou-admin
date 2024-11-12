<template>
  <div class="edit">
    <div class="edit-wrapper">
      会议题目：
      <el-input v-model="title" class="edit-wrapper-input" />
    </div>
    <div class="edit-tinymce-wrapper">
      <div class="edit-tinymce">
        <Tinymce ref="editor" v-model="content" :width="700" :height="400" />
      </div>
    </div>
    <div class="edit-release-wrapper">
      <el-button type="primary" @click="meetHandler">{{ btnTxt }}</el-button>
    </div>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import { getMeetDetails, updateMeet, releaseMeet } from '@/api/meet'
export default {
  components: {
    Tinymce
  },
  data() {
    return {
      btnTxt: '发布',
      id: 0,
      title: '',
      content: ''
    }
  },
  async created() {
    const { id } = this.$route.params
    if (!Number.isNaN(+id)) {
      this.id = id
      await this.fetchRequest(id)
      this.btnTxt = '更新'
    }
  },
  methods: {
    async fetchRequest(id) {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.2)'
      })
      try {
        const { data } = await getMeetDetails({
          meet_id: id
        })
        this.title = data.data.meet_title
        this.content = data.data.meet_content
        loading.close()
      } catch (err) {
        loading.close()
        this.$message.error('获取详情失败')
      }
    },
    meetHandler() {
      if (this.id === 0) {
        this.relsaseMeet()
      } else {
        this.upldaeMeet()
      }
    },
    async upldaeMeet() {
      const meetInfo = {
        meet_id: this.id,
        meet_title: this.title,
        meet_content: this.content
      }
      const result = this.propsCheck(meetInfo)
      if (!result) {
        this.$message.error('会议信息必须填写完整')
        return
      }
      const loading = this.$loading({
        lock: true,
        text: '更新中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.2)'
      })
      try {
        const { data } = await updateMeet(meetInfo)
        if (data.noerr === 1) {
          throw new Error()
        }
        loading.close()
        this.$router.push(`/meet/meet`)
        this.$message.success('更新成功')
      } catch (err) {
        loading.close()
        this.$message.error('更新失败')
      }
    },
    async relsaseMeet() {
      const meetInfo = {
        meet_title: this.title,
        meet_content: this.content
      }
      const result = this.propsCheck(meetInfo)
      if (!result) {
        this.$message.error('会议信息必须填写完整')
        return
      }
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.2)'
      })
      try {
        const { data } = await releaseMeet(meetInfo)
        if (data.noerr === 1) {
          throw new Error()
        }
        loading.close()
        this.$message.success('发布成功')
        this.$router.push(`/meet/meet`)
      } catch (err) {
        loading.close()
        this.$message.error('发布失败')
      }
    },
    propsCheck(info) {
      let result = true
      Object.keys(info).forEach(key => {
        if (!info[key]) {
          result = false
        }
      })
      return result
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
