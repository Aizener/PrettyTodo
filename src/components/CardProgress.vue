<template>
  <div class="card-progress">
    <div class="content">
      <p class="tasks">{{ total }}Tasks</p>
      <p class="title">{{ themes[idx] }}</p>
      <div class="progress">
        <div ref="progress" :style="{width: progress + '%'}"></div>
        <span>{{ progress }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'CardProgress',
  props: ['idx'],
  data () {
    return {
      themes: ['蓝色主题风格', '红色主题风格', '绿色主题风格']
    }
  },
  computed: {
    ...mapState(['total']),
    ...mapGetters(['progress', 'backgroundColor'])
  },
  mounted () {
    this.setBack()
    this.$root.$on('setBg', this.setBack)
  },
  methods: {
    setBack () {
      this.$refs.progress.classList = []
      this.$refs.progress.classList.add(this.backgroundColor)
    }
  }
}
</script>

<style lang="less" scoped>
.card-progress {
  height: 60px;
}
.content {
  width: 100%;
  position: absolute;
  .tasks {
    font-size: 14px;
    font-weight: 200;
    transform: translateY(-30px);
  }
  .title {
    font-size: 16px;
    font-weight: 300;
    transform: translateY(-20px);
  }
  .progress {
    width: 90%;
    height: 5px;
    border-radius: 10px;
    border: 1px solid #F5F5F5;
    position: relative;
    & > span {
      position: absolute;
      right: -30px;
      top: -5px;
      font-size: 12px;
      font-weight: 300;
    }
    & > div {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      border-radius: 10px;
      transition: width .5s;
    }
  }
}
</style>
