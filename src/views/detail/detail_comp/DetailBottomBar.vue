<template>
  <div id="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <img src="../../../assets/img/detail/service.svg" alt="">
        <span>客服</span>
      </div>
      <div>
        <img src="../../../assets/img/detail/store.svg" alt="">
        <span>店铺</span>
      </div>
      <div>
        <img src="../../../assets/img/detail/collect.svg" alt="">
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div @click="cartClick">加入购物车</div>
      <div @click="cartClick">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      cartClick() {
        this.$emit('cartClick')
      }
    }
  }
</script>

<style scoped>
  #bottom-bar {
    width: 100%;
    height: 49px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: var(--color-background);
  }
  .bar-item {
    text-align: center;
  }
  .bar-left {
    display: flex;
    float: left;
    width: 46%;
    font-size: 13px;
  }
  .bar-left>div {
    flex: 1;
    margin-top: 3px;
  }
  .bar-left>div>img {
    width: 25px;
    display: block;
    margin: 0 auto 3px;
  }
  .bar-right {
    display: flex;
    font-size: 13px;
  }
  .bar-right>div {
    flex: 1;
    background-color: #ffe817;
    color: var(--color-text);
    line-height: 40px;
    border-radius: 45px;
    margin: 5px 2px;
  }
  .bar-right>div:last-child {
    background-color: #f69;
  }
</style>