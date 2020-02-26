<template>
  <div class="list-item">
    <div class="checkImg">
      <div @click="checkClick">
        <img v-if="isCheck" src="../../../assets/img/cart/checked.png" alt="">
        <img v-else src="../../../assets/img/cart/uncheck.png" alt="">
      </div>
    </div>
    <div class="proImg">
      <img class="showImg" :src="this.product.img" alt="">
    </div>
    <div class="proDesc">
      <div class="proDesc-top">{{this.product.title}}</div>
      <div class="proDesc-top">商品描述：{{this.product.desc}}</div>
      <div class="size">型号: {{this.product.size}}</div>
      <div>
        <span class="price">￥ {{this.product.price}}</span>
        <span class="counter">x{{this.product.counter}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CartListItem",
    props: {
      product: {
        type: Object,
        default: {}
      }
    },
    computed: {
      isCheck() {
        return this.product.state
      }
    },
    methods: {
      checkClick() {
        this.$store.state.cartList.filter(i => i.iid === this.product.iid)[0].state = !this.$store.state.cartList.filter(i => i.iid === this.product.iid)[0].state;
      }
    }
  }
</script>

<style scoped>
  .list-item {
    width: 100%;
    display: flex;
    padding: 10px 5px ;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .checkImg {
    width: 10%;
    position: relative;
  }
  .checkImg>div {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .checkImg>div>img {
    width: 24px;
  }
  .proImg {
    width: 30%;
  }
  .showImg {
    width: 80px;
    height: 100px;
    border-radius: 10px;
  }
  .proDesc {
    width: 55%;
    overflow: hidden;
    position: relative;
  }
  .proDesc-top {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 10px;
  }
  .size {
    padding: 8px 0;
    font-size: 12px;
  }
  .proDesc-top:nth-child(1) {
    font-size: 15px;
    font-weight: bold;
  }
  .proDesc-top:nth-child(2) {
    font-size: 12px;
  }
  .price {
    position: absolute;
    bottom: 2px;
    color: var(--color-high-text);
  }
  .counter {
    position: absolute;
    bottom: 2px;
    right: 20px;
  }
</style>