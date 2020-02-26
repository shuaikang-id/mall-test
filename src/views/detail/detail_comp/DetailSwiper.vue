<template>
  <swiper class="detailSwiper1">
    <swiper-item v-for="item in topImages">
        <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from '../../../components/common/swiper'
  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImages: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .detailSwiper1 {
    height: 250px;
    overflow: hidden;
  }
</style>