<template>
  <div v-if="Object.keys(details).length !== 0" class="detail-info">
    <div class="info-desc">
      <div class="desc-start"></div>
      <div class="desc-content">{{details.desc}}</div>
      <div class="desc-end"></div>
    </div>
    <div class="info-key">{{details.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in details.detailImage[0].list" :key="index" :src="item" @load="imgLoad" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailInfo",
    props: {
      details: {
        type: Object,
        default: {}
      }
    },
    methods: {
      imgLoad() {
          this.$emit('imgLoad');
      }
    }
  }
</script>

<style scoped>
  .detail-info {
    border-bottom: 5px solid rgba(100,100,100,.1);
    padding: 15px 0;
  }
  .info-desc {
    padding: 0 15px;
  }
  .desc-start, .desc-end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }
  .desc-start {
    float: left;
  }
  .desc-end {
    float: right;
  }
  .desc-start::before, .desc-end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }
  .desc-end::after {
    right: 0;
  }
  .desc-content {
    padding: 20px 0;
    font-size: 14px;
  }
  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }
  .info-list img {
    width: 100%;
  }
</style>