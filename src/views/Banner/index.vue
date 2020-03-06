<template>
  <div class="banner-container">
    <div class="banner-add">
      <el-button type="primary" @click="addBanner">
        上传
        <input ref="input" class="banner-upload" type="file" @change="uploadhandler" multiple />
      </el-button>
    </div>
    <div class="banner-table">
      <banner-table :table-data="tableData" />
    </div>
  </div>
</template>

<script>
import BannerTable from '@/components/Banner/BannerTable'
export default {
  name: 'Banner',
  components: {
    BannerTable
  },
  data() {
    return {
      dialogVisible: false,
      imageUrl: '',
      file: '',
      tableData: [
        {
          id: 1,
          url: 'xxxxx'
        },
        {
          id: 2,
          url: 'xxxxx'
        },
        {
          id: 3,
          url: 'xxxxx'
        },
        {
          id: 4,
          url: 'xxxxx'
        }
      ]
    }
  },
  methods: {
    // 打开添加轮播图dialog
    addBanner() {
      this.$refs.input.click()
    },
    uploadhandler(event) {
      const inputEle = event.target
      const file = inputEle.files[0]
      if (!file) {
        return
      }
      this.uploadRequest(file)
    },
    async uploadRequest(file) {
      // 上传操作
    },

    // dialog关闭
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
}
</style>
