<template>
  <div v-if="Object.keys(goods).length !== 0"
       class="info">
    <div class="title">{{goods.title}}</div>
    <div class="price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="others">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="service">
      <span class="service-item"
            v-for="index in goods.services.length-1"
            :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style scoped>
  .info {
    padding: 8px;
    border-bottom: 5px solid rgba(100,100,100,.1);
  }
  .title {
    color: #222
  }
  .price {
    margin-bottom: 10px;
  }
  .new-price {
    font-size: 24px;
    color: var(--color-high-text);
  }
  .old-price {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
    line-height: 30px;
  }
  .discount {
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    line-height: 30px;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;
    position: relative;
    top: -8px;
  }
  .others {
    width: 95%;
    display: flex;
    font-size: 12px;
    font-weight: lighter;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 2px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }
  .service {
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 28px 0;
    font-size: 13px;
    font-weight: bold;
  }
  .service>span>img {
    width: 12px;
  }
</style>