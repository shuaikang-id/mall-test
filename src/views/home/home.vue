<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <control-bar :titles="['流行','新款','精选']"
                 @tabClick="tabClick"
                 ref="controlBar1"
                 class="control-bar1"
                 v-show="isBarFixed"/>
    <scroll class="content"
            :probe-type="3"
            :pull-up-load="true"
            ref="scroll"
            @scroll="contentScroll"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @imageLoad.once="swiperImageLoad"/>
      <recommend :recommends="recommends"/>
      <new-arrival/>
      <control-bar :titles="['流行','新款','精选']"
                   @tabClick="tabClick"
                   ref="controlBar"
                   :class="{fixed: isBarFixed}"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isActive"/>
  </div>
</template>

<script>
  import {debounce} from "../../components/common/utils/debounce";
  import scroll from "../../components/common/bscoll/Bscoll";
  import {getHomeMultidata,getHomeGoods} from "../../network/home";
  import NavBar from "../../components/common/navbar/NavBar";
  import HomeSwiper from "./children_comp/HomeSwiper";
  import Recommend from "./children_comp/Recommend";
  import NewArrival from "./children_comp/NewArrival";
  import ControlBar from "../../components/content/controlbar/ControlBar";
  import GoodsList from "../../components/content/goods/GoodsList";
  import BackTop from "../../components/common/backtop/BackTop";
  export default {
    name: "home",
    components: {
      scroll,
      NavBar,
      HomeSwiper,
      Recommend,
      NewArrival,
      ControlBar,
      GoodsList,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        newImage: '',
        goods: {
            pop: {
              page: 0,
              list: []
            },
            new: {
              page: 0,
              list: []
            },
            sell: {
              page: 0,
              list: []
            }
        },
        currentType: 'pop',
        isActive: false,
        tabOffsetTop: 0,
        isBarFixed: false,
        keepPosition: 0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
      }
    },
    methods: {
      /**
       * 事件监听
       * */
      tabClick(index) {
        switch (index) {
          case 0: this.currentType = 'pop'; break;
          case 1: this.currentType = 'new'; break;
          case 2: this.currentType = 'sell'; break;
        }
        this.$refs.controlBar1.currentIndex = index;
        this.$refs.controlBar.currentIndex = index;
      },
      backClick() {
        this.$refs.scroll.scrollTo(0,0)
      },
      contentScroll(position) {
        this.isActive = (-position.y > 1000);
        this.isBarFixed = -(position.y) > this.tabOffsetTop;
      },
      loadMore() {
        this.getHomeGoods(this.currentType);
        this.$refs.scroll.finishScroll();
      },
      swiperImageLoad() {
        this.tabOffsetTop = this.$refs.controlBar.$el.offsetTop;
      },
      /**
       * 网络请求
       * */
      getHomeMultidata() {
        getHomeMultidata()
          .then(res => {
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
          })
          .catch(err => {
            console.log(err);
          })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page)
          .then(res => {
            this.goods[type].list.push(...res.data.list);
            this.goods[type].page += 1;
            // this.$refs.scroll.finishScroll();
          })
          .catch(err => {
            console.log(err);
          })
      }
    },
    created() {
      /**
       * test data
       * */
      /*let nums = [1,2,3];
      let nums1 = [3,5,7];*/
      // nums.push(nums1);
      // console.log(nums);    // 错误

      // es5:
      /*nums1.forEach(i => {
        nums.push(i);
      })
      console.log(nums);*/

      // es6:
      /*nums.push(...nums1)
      console.log(nums);*/

      // 轮播图，推荐数据
      this.getHomeMultidata();
      // 商品数据
      this.getHomeGoods('pop',1);
      this.getHomeGoods('new',1);
      this.getHomeGoods('sell',1);
    },
    mounted() {
      // 图片加载执行scroll刷新
      // debounce(() => {
      //   this.$bus.$on('imgLoad',() => {
      //     this.$refs.scroll.refresh();
      //   })
      // })

      // debounce效果不佳
      this.$bus.$on('imgLoad',() => {
        this.$refs.scroll.refresh();
      })
    },
    activated() {
      this.$refs.scroll.refresh();
      this.$refs.scroll.scrollTo(0,this.keepPosition,0)
    },
    deactivated() {
      this.keepPosition = this.$refs.scroll.getScrollY();
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: var(--color-background);
  }
  #home {
    background-color: var(--color-background);
    height: 100vh;
    position: relative;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .control-bar1 {
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
    z-index: 999;
  }
</style>