<template>
  <div id="bottom-bar">
    <div @click="allClick">
      <img v-if="isAll" class="checked" src="../../../assets/img/cart/checked.png" alt="">
      <img v-else class="uncheck" src="../../../assets/img/cart/uncheck.png" alt="">
      <span>全选</span>
    </div>
    <div>合计: ￥{{this.totalPrice}}</div>
    <div class="count">去计算：{{this.count}}</div>
  </div>
</template>

<script>
  export default {
    name: "CartBottomBar",
    computed: {
      totalPrice() {
        return this.$store.state.cartList.filter(i => i.state === true).reduce((prePrice,i) => {
          return prePrice += i.counter * i.price
        },0).toFixed(2)
      },
      isAll() {
        if(this.$store.state.cartList.length === 0) {
          return false
        }else{
          return this.$store.state.cartList.every(i => i.state === true);
        }
      },
      count() {
        return this.$store.state.cartList.filter(i => i.state === true).length;
      }
    },
    methods: {
      allClick() {
        if(this.isAll) {
          this.$store.state.cartList.forEach(i => i.state = false);
        }else{
          this.$store.state.cartList.forEach(i => i.state = true)
        }
      }
    }
  }
</script>

<style scoped>
  #bottom-bar {
    position: fixed;
    bottom: 49px;
    width: 100%;
    height: 40px;
    display: flex;
    line-height: 40px;
    text-align: center;
    background-color: #eee;
    font-size: 14px;
  }
  #bottom-bar>div>span {
    display: inline-block;
  }
  #bottom-bar>div>img {
    position: relative;
    top: 5px;
    width: 24px;
    margin-right: 7px;
  }
  #bottom-bar>div {
    flex: 1;
  }
  .count {
    background-color: var(--color-tint);
  }
</style>