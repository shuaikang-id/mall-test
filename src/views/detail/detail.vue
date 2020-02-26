<template>
  <div id="detail">
    <detail-nav-bar
      class="nav-bar"
      @titleClick="barClick"
      ref="nav"/>
    <scroll class="content"
            ref="scroll"
            @scroll="contentScroll"
            :probe-type="3" >
      <detail-swiper :top-images="topImage"/>
      <detail-base-info :goods="goods"/>
      <detail-store :store="store"/>
      <detail-info :details="details" @imgLoad="imgLoad"/>
      <detail-params :params="paramInfo" ref="params"/>
      <detail-comment :comment="commentInfo" ref="comment"/>
      <goods-list :goods="recommend" ref="list"/>
    </scroll>
    <detail-select @touchmove.native.prevent
                   :select="select"
                   :isOpen="isOpen"
                   :iid="iid"
                   class="select"
                   :class="{selectOpen: isOpen}"
                   ref="select"
                   @closeClick="closeClick"/>
    <detail-bottom-bar @cartClick="cartClick"/>
    <back-top v-show="isActive" @click.native="backClick"/>
  </div>
</template>

<script>
  import {debounce} from "../../components/common/utils/debounce";
  import {getDetail, GoodsInfo, Shop, DetailInfos, ParamInfo, getRecommend} from "../../network/detail";
  import scroll from "../../components/common/bscoll/Bscoll";
  import DetailNavBar from "./detail_comp/DetailNavBar";
  import DetailSwiper from "./detail_comp/DetailSwiper";
  import DetailBaseInfo from "./detail_comp/DetailBaseInfo";
  import DetailStore from "./detail_comp/DetailStore";
  import DetailInfo from "./detail_comp/DetailInfo";
  import DetailParams from "./detail_comp/DetailParams";
  import DetailComment from "./detail_comp/DetailComment";
  import GoodsList from "../../components/content/goods/GoodsList";
  import DetailBottomBar from "./detail_comp/DetailBottomBar";
  import DetailSelect from "./detail_comp/DetailSelect";
  import BackTop from "../../components/common/backtop/BackTop";
  export default {
    name: "detail",
    components: {
      scroll,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailStore,
      DetailInfo,
      DetailParams,
      DetailComment,
      GoodsList,
      DetailBottomBar,
      DetailSelect,
      BackTop
    },
    data() {
      return {
        iid:  '',
        topImage: [],
        goods: {},
        store: {},
        details: {},
        paramInfo: {},
        commentInfo: {},
        recommend: [],
        select: [],
        themeTopY:[],
        getThemsTopY: null,
        currentIndex: 0,
        isOpen: false,
        isActive: false
      }
    },
    methods: {
      imgLoad() {
        debounce(() => {
          this.$refs.scroll.refresh();
        })
        this.getThemsTopY();

      },
      barClick(index) {
        this.$refs.scroll.scrollTo(0,- this.themeTopY[index],300)
      },
      contentScroll(position) {
        const positionY = - position.y;
        let length = this.themeTopY.length;
        for(let i = 0; i < length - 1; i++) {
          // if((this.currentIndex !== i) && ((i === length - 1 && positionY >= this.themeTopY[i]) || (i < length - 1 && positionY > this.themeTopY[i] && positionY <= this.themeTopY[i+1]))) {
          //   this.currentIndex = i;
          //   this.$refs.nav.currentIndex = this.currentIndex;
          // }
          if(positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1] ) {
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex;
          }
        }
        this.isActive = (-position.y > 1000);
      },
      cartClick() {
        this.isOpen = true;
      },
      closeClick() {
        this.isOpen = false;
      },
      backClick() {
        this.$refs.scroll.scrollTo(0,0);
      }

    },
    created() {
      this.iid = this.$route.query.iid;
      getDetail(this.iid)
        .then(res => {
          const data = res.result;
          this.topImage = data.itemInfo.topImages;

          //商品信息
          this.goods = new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services)
          //店家信息
          this.store = new Shop(data.shopInfo);
          //商品详细信息
          this.details = new DetailInfos(data.detailInfo);
          //商品参数
          this.paramInfo = new ParamInfo(data.itemParams.info,data.itemParams.rule);
          //评论数据
          if(data.rate.list) {
            this.commentInfo = data.rate.list[0];
          }
          //选购组件
          this.select.push(this.topImage[0]);
          this.select.push(this.goods.realPrice);
          this.select.push(this.paramInfo.infos.filter(item => item.key === "尺码"));
          this.select.push(this.goods.title);
          this.select.push(this.goods.desc);
          // this.$nextTick(() => {
          //   this.themeTopY.push(0);
          //   this.themeTopY.push(this.$refs.params.$el.offsetTop);
          //   this.themeTopY.push(this.$refs.comment.$el.offsetTop);
          //   this.themeTopY.push(this.$refs.list.$el.offsetTop);
          //   console.log(this.themeTopY);
          // })
        })
        .catch(err => {
          console.log(err);
        })
      //推荐数据
      getRecommend()
        .then(res => {
          this.recommend = res.data.list;
        })
        .catch(err => {
          console.log(err);
        })

      this.getThemsTopY = debounce(() => {
        this.themeTopY = [];
        this.themeTopY.push(0);
        this.themeTopY.push(this.$refs.params.$el.offsetTop);
        this.themeTopY.push(this.$refs.comment.$el.offsetTop);
        this.themeTopY.push(this.$refs.list.$el.offsetTop);
        this.themeTopY.push(Number.MAX_VALUE);
      })
    }
  }
</script>

<style scoped>
  #detail {
    height: 100vh;
    position: relative;
  }
  .nav-bar {
    background-color: var(--color-background);
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .selectOpen {
    transform: translateY(calc(-100% - 44px));
  }
  .select {
    position: relative;
    bottom: -100vh;
    transition:all 0.2s ease 0s
  }
</style>