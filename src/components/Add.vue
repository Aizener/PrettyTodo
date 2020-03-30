<template>
  <div class="add animated" v-show="status !== 0" :class="{slideOutUp: status === -1, slideInDown: status === 1}">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span @click="closeAddCard"><i class="el-icon-back" /></span>
      </div>
      <div>
        <h3>新建待办事项</h3>
        <el-input v-model="title" placeholder="请输入待办事项名称...">
          <template slot="prepend">标题</template>
        </el-input>
        <el-button type="primary" @click="addMyItem">添加</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Add',
  data () {
    return {
      status: 0,
      title: ''
    }
  },
  mounted () {
    this.$root.$on('showList', this.showList)
    this.$root.$on('changeRouter', this.changeRouter)
  },
  methods: {
    ...mapMutations(['addItem']),
    closeAddCard () {
      this.status = -1
    },
    changeRouter () {
      this.status = 0
    },
    showList () {
      this.status = 1
    },
    addMyItem () {
      if (this.title === '') {
        this.$message({
          message: '请输入待办事项名称！',
          type: 'warning'
        })
        return null
      }
      this.addItem(this.title)
      this.status = -1
      this.title = ''
    }
  }
}
</script>

<style lang="less" scoped>
.add {
  width: 100%;
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  .box-card {
    padding-bottom: 30px;
  }
  button {
    width: 100%;
    transform: translateY(15px);
  }
}
</style>
