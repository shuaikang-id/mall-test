<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Bscoll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null,
      }
    },
    components: {
      BScroll
    },
    mounted() {
      // 创建保存bscroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      if(this.probeType === 2 || this.probeType ===3) {
        this.scroll.on('scroll', position => {
          this.$emit('scroll',position)
        })
      }

      if(this.pullUpLoad === true) {
        this.scroll.on('pullingUp',() => {
          this.$emit('pullingUp');
        })
      }

      // console.log(this.scroll.scrollerHeight);  滚动区域多高
    },

    methods: {
      scrollTo(x, y,time = 500) {
        this.scroll && this.scroll.scrollTo(x, y, time);
      },
      finishScroll() {
        this.scroll && this.scroll.finishPullUp();
      },
      refresh() {
        this.scroll && this.scroll.refresh();
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0;
      }
    }
  }
</script>

<style scoped>

</style>