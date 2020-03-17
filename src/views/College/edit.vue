<template>
  <div class="college">
    <div class="base-info">
      <p class="info-title">院校信息：</p>
      <div class="info-content">
        <div>
          <div class="info-item">
            <p>院校名称：</p>
            <el-input v-model="baseInfo.name" placeholder="请输入内容" />
          </div>
          <div class="info-item">
            <p>院校封面图:</p>
            <div class="upload">
              <el-upload
                v-if="!baseInfo.baseUrl"
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
                v-if="baseInfo.baseUrl"
                class="image-preview"
                :style="{backgroundImage: 'url(' + baseInfo.baseUrl + ')'}"
              >
                <div class="image-preview-action" @click="removeBanner">
                  <i class="el-icon-delete" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="info-item"><P>所在地：</P><el-input v-model="baseInfo.local" placeholder="请输入内容" /></div>
          <div class="info-item">
            <p> 招生简介</p>
            <el-input
              v-model="baseInfo.intor"
              type="textarea"
              :rows="8"
              placeholder="请输入内容"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="postgraduate-info">
      <p class="info-title">考研信息：</p>
      <div class="info-content">
        <div>
          <div class="info-item">
            <p>研究生院网址：</p>
            <el-input v-model="postgraduateInfo.graduateUrl" placeholder="请输入研究生院网址" />
          </div>
          <div class="info-item">
            <p>报录比：</p>
            <el-input
              v-model="postgraduateInfo.reportRatio"
              type="textarea"
              :rows="6"
              placeholder="每条内容占一行，年份与报录比之间用空格隔开"
            />
          </div>
          <div class="info-item">
            <p>直通学长：</p>
            <el-input
              v-model="postgraduateInfo.seniors"
              type="textarea"
              :rows="6"
              placeholder="每条内容占一行，姓名与联系方式(微信)之间用空格隔开"
            />
          </div>
          <div class="info-item">
            <p>考研经验：</p>
            <el-input
              v-model="postgraduateInfo.experience"
              type="textarea"
              :rows="6"
              placeholder="每条占一行，Q与A之间用空格隔开"
            />
          </div>
        </div>
        <div>
          <div class="info-item">
            <p>考研调剂网址：</p>
            <el-input v-model="postgraduateInfo.transferUrl" placeholder="请输入考研调剂信息网址" />
          </div>
          <div class="info-item">
            <p>历年分数线：</p>
            <el-input
              v-model="postgraduateInfo.sourceLine"
              type="textarea"
              :rows="6"
              placeholder="每条占一行，年份与分数之间用空格隔开"
            />
          </div>
          <div class="info-item">
            <p>研究生导师：</p>
            <el-input
              v-model="postgraduateInfo.tutors"
              type="textarea"
              :rows="6"
              placeholder="每条内容占一行，姓名与联系方式之间用空格隔开"
            />
          </div>
          <div class="info-item">
            <p>真题资料：</p>
            <el-input
              v-model="postgraduateInfo.resources"
              type="textarea"
              :rows="6"
              placeholder="每条内容占一行，资料名称 链接 密码之间用空格隔开"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="sumit-btn">
      <el-button type="primary" @click="submitCollege">{{ btnTxt }}</el-button>
    </div>
  </div>
</template>

<script>
import { releaseCollege, getCollegeDetails, updateCollege } from '@/api/college'
export default {
  name: 'College',
  data() {
    return {
      btnTxt: '上传',
      id: 0,
      dataObj: {
        token: '',
        key: ''
      },
      baseInfo: {
        name: '',
        local: '',
        baseUrl: '',
        intor: ''
      },
      postgraduateInfo: {
        graduateUrl: '',
        transferUrl: '',
        reportRatio: '',
        sourceLine: '',
        seniors: '',
        tutors: '',
        experience: '',
        resources: ''
      }
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
    handleBannerSuccess(data) {
      const base64 = data.files.file
      this.baseInfo.baseUrl = base64
    },
    removeBanner() {
      this.baseInfo.baseUrl = ''
    },
    async fetchRequest() {
      const loading = this.$loading({
        lock: true,
        text: '发布中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.2)'
      })
      try {
        const { data } = await getCollegeDetails({
          college_id: this.id
        })
        if (data.noerr === 1) {
          throw new Error()
        }
        this.baseInfo.name = data.data.college_name
        this.baseInfo.local = data.data.college_local
        this.baseInfo.baseUrl = data.data.college_banner
        this.baseInfo.intor = data.data.college_intor
        this.postgraduateInfo = this.reverseFormat(JSON.parse(data.data.college_graduate))
      } catch (err) {
        this.$message.error('获取详情失败')
      } finally {
        loading.close()
      }
    },
    async submitCollege() {
      const graduateChecked = this.propsCheck(this.postgraduateInfo)
      const baseChecked = this.propsCheck(this.baseInfo)
      if (!graduateChecked || !baseChecked) {
        this.$message.error('院校信息请填写完整')
        return
      }
      const formatPostGraduate = this.format(this.postgraduateInfo)
      const collegeInfo = Object.assign({}, this.baseInfo, {
        graduateInfo: JSON.stringify(formatPostGraduate)
      })
      if (this.id === 0) {
        await this.releaseCollege(collegeInfo)
      } else {
        await this.updateCollege(collegeInfo)
      }
    },
    async updateCollege(collegeInfo) {
      const loading = this.$loading({
        lock: true,
        text: '更新中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.2)'
      })
      try {
        const { data } = await updateCollege(Object.assign(collegeInfo, {
          college_id: this.id
        }))
        if (data.noerr === 1) {
          throw new Error()
        }
        this.$message.success('更新成功')
        this.$router.push(`/college/college`)
      } catch (err) {
        this.$message.error('更新失败')
      } finally {
        loading.close()
      }
    },
    async releaseCollege(collegeInfo) {
      const loading = this.$loading({
        lock: true,
        text: '发布中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.2)'
      })
      try {
        const { data } = await releaseCollege(collegeInfo)
        if (data.noerr === 1) {
          throw new Error()
        }
        this.$message.success('发布成功')
        this.$router.push(`/college/college`)
      } catch (err) {
        this.$message.error('发布失败')
      } finally {
        loading.close()
      }
    },
    format(info) {
      return Object.keys(info).reduce((result, key) => {
        const message = this.postgraduateInfo[key].split('\n')
        result[key] = message.map(item => {
          return item.split(' ')
        })
        return result
      }, {})
    },
    reverseFormat(info) {
      return Object.keys(info).reduce((result, key) => {
        const message = info[key].map(item => item.join(' ')).join('\n')
        result[key] = message
        return result
      }, {})
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

<style>
.base-info,.postgraduate-info {
  padding: 16px;
}
.info-title {
  font-size: 18px;
  font-weight: bold;
}
.info-title:before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 20px;
  position: relative;
  top: 2px;
  margin-right:4px;
  border-radius: 4px;
  background-color:rgb(46, 46, 187);
}
.info-content {
  width: 100%;
  display: flex;
  padding-left: 16px;
}
.info-content  >  div {
  width: 50%;
  margin-left: 20px;
}
.info-item p {
  width: 150px;
}
.info-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin-top:12px;
}
.sumit-btn {
  margin: 20px 0;
  display: flex;
  justify-content: center;
}
.upload {
  width: 420px
}
.image-uploader {
  width: 100%;
  height: 150px;
}
.image-preview {
  width: 400px;
  height: 200px;
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
</style>
