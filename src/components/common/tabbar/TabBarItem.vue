<template>
  <div id="tab-bar-item" @click="itemClick" >
    <div v-if="isActive"><slot name="item-icon-active"></slot></div>
    <div v-else><slot name="item-icon"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: {
        type: String,
        default: ''
      },
      activeColor: {
        type: String,
        default: '#ff8198'
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path);
      }
    },
    computed: {
      isActive() {
        // 比较自己path与当前route中活跃的path是否相同
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {};
      }
    }
  }
</script>

<style scoped>
  #tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 13px;
  }
  #tab-bar-item>div>img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
</style>