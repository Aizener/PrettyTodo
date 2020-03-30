<template>
  <div class="card">
    <p>2020年3月22日 18:22 周日</p>
    <div @click="showMore" class="more" :class="{'more-active': isClick}">
      <i class="el-icon-more"></i>
    </div>
    <!-- <div class="content">
      <p class="tasks">12Tasks</p>
      <p class="title">这是今天待办事项的名称</p>
      <div class="progress">
        <div></div>
      </div>
    </div> -->
    <div class="progress">
      <v-card-progress :idx="idx"></v-card-progress>
    </div>
  </div>
</template>

<script>
import CardProgress from '@/components/CardProgress.vue'

export default {
  name: 'Card',
  props: ['idx'],
  data () {
    return {
      isClick: false,
      isClickCard: false
    }
  },
  methods: {
    showMore () {
      this.isClick = true
      setTimeout(() => {
        this.isClick = false
        this.$emit('showMore')
      }, 300)
    }
  },
  components: {
    'v-card-progress': CardProgress
  }
}
</script>

<style lang="less" scoped>
@import '../assets/less/adapter.less';
.card {
  .vw(300);
  width: @width;
  height: 300px;
  background: #fff;
  border-radius: 15px;
  position: relative;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, .5);
  .vw2(37.5);
  & > p {
    position: absolute;
    top: -25px;
    left: 15px;
    color: #fff;
    font-weight: 200;
    font-size: 14px;
  }
  .more {
    position: absolute;
    top: 15px;
    right: 20px;
    color: gray;
    transition: all .3s;
    border-radius: 50%;
    padding: 5px;
    box-shadow: 0 0 0 #DCDCDC;
  }
  .more-active {
    background: rgba(220, 220, 220, 0.5);
    transform: rotate(-30deg);
  }
  .progress {
    .vw(285);
    width: @width;
    position: absolute;
    left: 50%;
    margin-left: -@width/2;
    bottom: 10px;
  }
}
</style>
