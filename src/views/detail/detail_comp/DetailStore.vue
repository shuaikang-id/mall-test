<template>
  <div class="store-info">
    <div class="store-top">
      <img :src="store.logo" alt="商店logo">
      <span class="title">{{store.name}}</span>
    </div>
    <div class="middle">
      <div class="middle-item middle-left">
        <div class="sells-info">
          <div class="sells-count">
            {{store.sells | sellsCount}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="goods-info">
          <div class="goods-count">
            {{store.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="middle-item middle-right">
        <table>
          <tr v-for="(item, index) in store.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="enter-button">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopper",
    props: {
      store: {
        type: Object,
        default: {}
      }
    },
    filters: {
      sellsCount(item) {
        if(item < 10000) {
          return item
        }else {
          return `${(item / 10000).toFixed(1)}万`
        }
      }
    }
  }
</script>

<style scoped>
  .store-info {
    padding: 25px 8px;
    position: relative;
    z-index: 999;
    background-color: #fff;
  }
  .store-top {
    line-height: 45px;
    display: flex;
    align-items: center;
  }
  .store-top>img {
    width: 45px;
    height: 45px;
    border-radius: 9px;
    border: 1px solid rgba(0,0,0,.1);
  }
  .title {
    margin-left: 20px;
    vertical-align: center;
  }
  .middle {
    margin-top: 15px;
    display: flex;
    align-items: center;
  }
  .middle-item {
    flex: 1;
  }
  .middle-left {
    display: flex;
    justify-content: space-evenly;
    color: #333;
    font-weight: bold;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
  }
  .sells-text, .goods-text {
    margin-top: 10px;
    font-size: 12px;
  }
  .sells-count, .goods-count {
    font-size: 18px;
  }
  .middle-right {
    font-size: 13px;
    color: #333;
    margin-left: 17px;
  }
  .middle-right>table {
    width: 120px;
    margin-left: 30px;
  }
  .middle-right>table>td {
    padding: 5px 0;
  }
  .score {
    color: #5ea732;
  }
  .score-better {
    color: #f13e3a;
  }

  .better span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }

  .better-more span {
    background-color: #f13e3a;
  }
  .enter-button {
    width: 100%;
    text-align: center;
    margin-top: 15px;
  }
  .enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    line-height: 30px;
    border-radius: 10px;
  }
</style>