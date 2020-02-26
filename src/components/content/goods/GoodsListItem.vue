<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImages" alt="" @load="imgLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
        <span class="price">￥{{goodsItem.price}}</span>
        <span><img src="../../../assets/img/common/collect.svg" alt="" width="14px"></span>
        <span>{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default: {}
      }
    },
    methods: {
      imgLoad() {
        if(this.$route.path.indexOf('/home')) {
          this.$bus.$emit('imgLoad');
        }else if(this.$route.path.indexOf('/detail')) {
          this.$bus.$emit('imgLoad');
        }

      },
      itemClick() {
        this.$router.push({
          path: '/detail',
          query: {
            iid: this.goodsItem.iid
          }
        });
      }
    },
    computed: {
      showImages() {
        return this.goodsItem.image || this.goodsItem.show.img;
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    width: 48%;
    padding-bottom: 25px;
    position: relative;
  }
  .goods-item>img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    text-align: center;
    font-size: 14px;
  }
  .goods-info>p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
</style>