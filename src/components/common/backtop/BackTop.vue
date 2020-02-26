<template>
  <div id="back-top">
    <img src="../../../assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    methods: {
    }
  }
</script>

<style scoped>
  #back-top {
    position: fixed;
    bottom: 63px;
    right: 10px;
    z-index: 999;
  }
  #back-top>img {
    width: 42px;
  }
</style>