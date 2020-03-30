<template>
  <div class="home">
    <div class="intro-wraper">
      <v-introduce></v-introduce>
    </div>
    <swiper ref="swiper" class="card-wraper" :options="swiperOptions">
      <swiper-slide v-for="(item, idx) in [1, 2, 3]" :key="idx">
        <v-card :idx="idx" @showMore="showMore(item)"></v-card>
      </swiper-slide>
    </swiper>
    <v-card-detail v-if="isShow" class="animated" :class="{'zoomIn': isShowMore, 'zoomOut': !isShowMore}" @closeMore="closeMore"></v-card-detail>
    <v-add></v-add>
  </div>
</template>

<script>
import Introduce from '@/components/Introduce.vue'
import Card from '@/components/Card.vue'
import CardDetail from '@/components/CardDetail.vue'
import Add from '@/components/Add.vue'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { mapMutations } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      swiperOptions: {
        speed: 1000,
        on: {
          slideChangeTransitionStart: () => {
            const idx = this.$refs.swiper.swiperInstance.activeIndex
            this.changeCard(idx)
            this.$root.$emit('setBg')
          }
        }
      },
      isShow: false,
      isShowMore: false
    }
  },
  methods: {
    ...mapMutations(['changeCard']),
    showMore (item) {
      this.isShow = true
      this.isShowMore = true
    },
    closeMore () {
      this.isShowMore = false
      setTimeout(() => {
        this.isShow = false
      }, 1e3)
    }
  },
  components: {
    'v-card': Card,
    'v-introduce': Introduce,
    'v-card-detail': CardDetail,
    'v-add': Add,
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
}
</script>

<style scoped lang="less">
.home {
  overflow: hidden;
}
.card-wraper {
  width: 80%;
  padding: 30px 0 10px 0;
  overflow: visible;
  .swiper-slide {
    margin-right: 10px;
  }
}
</style>
