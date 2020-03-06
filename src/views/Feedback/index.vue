<template>
  <div class="dashboard-container">
    <div class="dashboard-text">系统反馈管理</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Feedback',
  computed: {
    ...mapGetters([
      'name'
    ])
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
