<template>
  <div id="control-bar">
    <div v-for="(item,index) in titles"
         class="control-bar-item"
         @click="itemClick(index)" :class="{active: index === currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ControlBar",
    props: {
      titles: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('tabClick',index);
      }
    }
  }
</script>

<style scoped>
  #control-bar {
    height: 40px;
    display: flex;
    text-align: center;
    font-size: 15px;
    line-height: 40px;
    background-color: var(--color-background);
  }
  .control-bar-item {
    flex: 1;
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active {
    color: var(--color-tint);
  }
  .active>span {
    padding-bottom: 6px;
    border-bottom: 3px solid var(--color-tint);
  }
</style>