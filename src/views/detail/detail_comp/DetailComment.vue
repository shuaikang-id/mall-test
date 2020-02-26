<template>
  <div class="comment" v-if="Object.keys(comment).length !== 0">
    <div class="header">
      <div>用户评价</div>
      <div>更多
        <img src="../../../assets/img/common/arrow_right.svg" alt="">
      </div>
    </div>
    <div class="user-info">
      <img :src="comment.user.avatar" alt="">
      <span>{{comment.user.uname}}</span>
    </div>
    <div class="detail-info">
      <p>{{comment.content}}</p>
      <div>
        <span class="data">{{comment.created | showDate}}</span>
        <span class="style">{{comment.style}}</span>
      </div>
    </div>
    <div class="info-imgs">
      <img :src="item" v-for="(item, index) in comment.images">
    </div>
    </div>
</template>

<script>
  import {formatDate} from "../../../common/utils";

  export default {
    name: "DetailComment",
    props: {
      comment: {
        type: Object,
        default: {}
      }
    },
    filters: {
      showDate(value) {
        // 时间戳转成date对象
        const date = new Date(value * 1000);
        // date对象格式化
        return formatDate(date, 'yyyy/MM/dd hh:mm')
      }
    }
  }
</script>

<style scoped>
  .comment {
    border-bottom: 5px solid #f2f5f8;
    padding: 0 8px;
  }
  .header {
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    border-bottom: 3px solid #f2f5f8;
  }
  .header>div:first-child {
    float: left;
  }
  .header>div:last-child {
    float: right;
  }
  .header>div:last-child>img {
    width: 15px;
  }
  .user-info {
    padding: 10px 0 5px;
  }

  .user-info>img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
  .user-info>span {
    position: relative;
    font-size: 15px;
    top: -15px;
    margin-left: 10px;
  }
  .detail-info {
    padding: 10px 0;
    color: #999;
  }
  .detail-info>p {
    font-size: 14px;
  }
  .detail-info>div {
    margin: 10px 0;
    font-size: 12px;
  }
  .data {
    float: left;
  }
  .style {
    float: right;
  }
  .info-imgs {
    margin-top: 20px;
  }
  .info-imgs img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
</style>