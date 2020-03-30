<template>
  <div class="list">
    <ul>
      <li v-for="(item, idx) in list" :key="item.id" @touchstart="beginTouch(item, idx)" @touchend="stopTouch" class="animated item" :class="{'bounceOut': isDel === item.id, 'myshake': isShake === item.id}">
        <el-checkbox v-model="item.checked" @change="doCheck(item)"></el-checkbox>
        <p :class="{'finished': item.checked}" @touchstart="touchMyText(item)">{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'List',
  data () {
    return {
      timer: null,
      shakeTimer: null,
      touchTime: 0,
      isDel: -1,
      isShake: -1,
      isLongTouch: false
    }
  },
  computed: {
    ...mapState(['list'])
  },
  mounted () {
    const list = document.getElementsByClassName('list > item')
    for (const item of list) {
      item.oncontextmenu = function () {
        return false
      }
    }
  },
  methods: {
    ...mapMutations(['deleteItem', 'touchText']),
    touchMyText (item) {
      setTimeout(() => {
        if (!this.isLongTouch) {
          this.touchText(item)
        }
      }, 400)
    },
    doCheck (item) {
      item.checked = !item.checked
      this.touchText(item)
    },
    beginTouch (item, idx) {
      clearInterval(this.shakeTimer)
      clearInterval(this.timer)
      this.touchTime = new Date().getTime()
      this.timer = setTimeout(() => {
        this.isDel = item.id
        setTimeout(() => {
          this.deleteItem(idx)
        }, 1e3)
        this.isShake = -1
      }, 2e3)
      this.shakeTimer = setTimeout(() => {
        this.isShake = item.id
      }, 400)
      this.isLongTouch = true
    },
    stopTouch () {
      const currTime = new Date().getTime()
      if (currTime - this.touchTime < 2000) {
        clearInterval(this.timer)
        this.isDel = -1
      }
      if (currTime - this.touchTime < 400) {
        this.isLongTouch = false
        clearInterval(this.shakeTimer)
      }
      this.isShake = -1
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  label {
    vertical-align: top;
    top: 3px;
  }
  p {
    display: inline-block;
    width: 90%;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 200;
    user-select: none;
    -moz-user-focus: none;
  }
  .finished {
    text-decoration: line-through;
  }
  .item {
    margin-top: 10px;
  }
  .myshake {
    animation: shake .2s linear 8;
  }
  @keyframes shake {
    0% {
      transform: translate(0);
    }
    25% {
      transform: translate(-2px);
    }
    50% {
      transform: translate(2px);
    }
    100% {
      transform: translate(0);
    }
  }
}
</style>
