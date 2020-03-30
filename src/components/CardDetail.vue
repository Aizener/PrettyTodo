<template>
  <div class="card-detail">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span @click="closeMore"><i class="el-icon-close" /></span>
        <el-button @click="addList" type="text">
          <i class="el-icon-plus" />
        </el-button>
      </div>
      <div class="progress">
        <v-card-progress></v-card-progress>
      </div>
      <div class="mtl block-30"></div>
      <p class="title">我的待办事项（长按删除）：</p>
      <div class="block-20"></div>
      <v-list></v-list>
    </el-card>
  </div>
</template>

<script>
import CardProgress from '@/components/CardProgress.vue'
import List from '@/components/List.vue'

export default {
  name: 'CardDetail',
  data () {
    return {
      tableData: [
        {
          check: false,
          title: '做什么呢？'
        }
      ]
    }
  },
  methods: {
    closeMore () {
      this.$emit('closeMore')
    },
    addList () {
      this.$root.$emit('showList')
    }
  },
  components: {
    'v-card-progress': CardProgress,
    'v-list': List
  }
}
</script>

<style lang="less" scoped>
.card-detail {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9;
  .box-card {
    height: 100vh;
  }
  button {
    float: right;
    padding: 3px 0;
    font-size: 16px;
  }
  .progress {
    transform: translateY(30px);
  }
  .title {
    font-size: 16px;
    font-weight: 200;
  }
}
</style>
