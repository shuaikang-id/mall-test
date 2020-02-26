<template>
  <div id="header-bar" class="center">
    <nav-bar>
      <div slot="center">购物车 ({{this.$store.state.cartList.length}})</div>
      <div slot="right" class="right" @click="delStore" :class="{isDo: doIt}">删除</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";
  export default {
    name: "CartBar",
    components: {
      NavBar,
      message: '',
      isShow: false
    },
    methods: {
      delStore() {
        this.$emit('delStore');
      }
    },
    computed: {
      doIt() {
        return !this.$store.state.cartList.find(i => i.state === true);
      }
    }
  }
</script>

<style scoped>
  .center {
    background-color: var(--color-tint);
    color: var(--color-background);
  }
  .right {
    border-left: 1px solid rgba(100,100,100,.2);
  }
  .isDo {
    pointer-events: none;
  }
</style>