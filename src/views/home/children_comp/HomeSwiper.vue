<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from '../../../components/common/swiper/index'
  export default {
    name: "HomeSwiper",
    components: {
      SwiperItem,
      Swiper
    },
    props: {
      banners: {
        type: Array,
        default: []
      }
    },
    methods: {
      imageLoad() {
          this.$emit('imageLoad');
        }
      }
  }
</script>

<style scoped>

</style>