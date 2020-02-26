<template>
  <div id="cart">
    <cart-bar @delStore="del"/>
    <scroll class="content">
      <cart-list/>
    </scroll>
    <cart-bottom-bar/>
    <toast :message="message" :show="isShow"/>
  </div>
</template>

<script>
  import scroll from "../../components/common/bscoll/Bscoll";
  import CartBar from "./cart_comp/CartBar";
  import CartBottomBar from "./cart_comp/CartBottomBar";
  import CartList from "./cart_comp/CartList";
  import toast from "../../components/common/toast/Toast";
  export default {
    name: "cart",
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    components: {
      CartBar,
      CartBottomBar,
      CartList,
      scroll,
      toast
    },
    methods: {
      del() {
        this.$store.dispatch('del')
          .then(res => {
            this.message = res;
            this.messageShow();
        })
          .catch(() => {
            this.message = '操作失败，请重试';
            this.messageShow();
          })
      },
      messageShow() {
        this.isShow = true;
        setTimeout(() => {
          this.isShow = false;
          this.message = ''
        },1200)
      }
    }
  }
</script>

<style scoped>
  #cart {
    position: relative;
    height: 100vh;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 89px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>