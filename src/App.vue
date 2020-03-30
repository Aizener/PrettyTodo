<template>
  <div id="app" ref="app">
    <header class="header">
      <router-link :to="{ name: 'Home' }" class="todo" @click.native="change(1)" :class="{'not-active': index === 0}">TODO</router-link>
      <router-link :to="{ name: 'About' }" class="about" @click.native="change(0)" :class="{'not-active': index === 1}">About</router-link>
    </header>
    <transition>
      <keep-alive>
        <router-view class="wrapper"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      index: 1
    }
  },
  components: {
  },
  mounted () {
    this.setBg()
    this.$root.$on('setBg', this.setBg.bind(this))
  },
  methods: {
    change (index) {
      this.index = index
      this.$root.$emit('changeRouter')
    },
    setBg () {
      this.$refs.app.classList = []
      this.$refs.app.classList.add(this.backgroundColor)
    }
  },
  computed: {
    ...mapGetters(['backgroundColor'])
  }
}
</script>

<style>
.about, .todo {
  text-decoration: none;
  color: #fff;
  transition: all .5s;
}
.about {
  position: relative;
  left: 10px;
}
.not-active {
  font-size: 14px;
  opacity: .9;
}
.v-enter-active, .v-leave-active {
  transition: all .5s;
}
.v-enter {
  transform: translateX(100%);
}
.v-leave-to {
  transform: translateX(-100%);
}
</style>
