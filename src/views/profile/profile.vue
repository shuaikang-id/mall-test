<template>
  <div id="profile">
    <nav-bar class="nav-bar">
        <div slot="center">我的商城</div>
      </nav-bar>
    <div class="header">
        <div class="img">
          <img src="../../assets/img/profile/headerImg.svg" alt="">
        </div>
        <div class="register">
          <div class="reg-left">
            <span>登陆 | 注册</span>
            <div>
              <img src="../../assets/img/profile/phone.svg" alt="">
              <span>暂无绑定手机</span>
            </div>
          </div>
          <div class="reg-right">
            <img src="../../assets/img/profile/next.svg" alt="">
          </div>
        </div>
      </div>
    <div class="body">
        <div class="body-top">
          <div>
            <div><span>0.00</span> 元</div>
            <span>我的余额</span>
          </div>
          <div>
            <div><span>0</span> 个</div>
            <span>我的余额</span>
          </div>
          <div>
            <div><span>0</span> 分</div>
            <span>我的积分</span>
          </div>
        </div>
        <div class="body-top body-top1">
          <div>
            <img src="../../assets/img/profile/forPay.svg" alt="">
            <div>待付款</div>
          </div>
          <div>
            <img src="../../assets/img/profile/forShipment.svg" alt="">
            <div>待发货</div>
          </div>
          <div>
            <img src="../../assets/img/profile/forReceived.svg" alt="">
            <div>待收货</div>
          </div>
          <div>
            <img src="../../assets/img/profile/forEvaluate.svg" alt="">
            <div>待评价</div>
          </div>
        </div>
        <div class="body-bottom">
          <div>
            <img src="../../assets/img/profile/message.svg" alt="">
            <span>我的消息</span>
          </div>
          <div>
            <img src="../../assets/img/profile/shopping.svg" alt="">
            <span>积分商城</span>
          </div>
          <div>
            <img src="../../assets/img/profile/feedback.svg" alt="">
            <span>问题反馈</span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import scroll from "../../components/common/bscoll/Bscoll";
  export default {
    name: "profile",
    components: {
      NavBar,
      scroll
    }
  }
</script>

<style scoped>
  #profile {
    position: relative;
    height: 100vh;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: var(--color-background)
  }
  .header {
    width: 100%;
    height: 100px;
    position: relative;
    border-bottom: 1px solid rgba(100,100,100,.4);
    font-size: 16px;
  }
  .reg-left>div {
    margin-top: 3px;
    font-size: 13px;
  }
  .header>.img {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    padding-right: 20px;
    border-right: 1px solid rgba(100,100,100,.1);
  }
  .register {
    position: absolute;
    width: 60%;
    top: 50%;
    left: 35%;
    transform: translateY(-50%);

  }
  .reg-right {
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
  }
  .body {
    width: 100%;
    position: absolute;
    top: 144px;
    bottom: 49px;
  }
  .body-top {
    display: flex;
    width: 100%;
    height: 100px;
    border-bottom: 10px solid rgba(100,100,100,.1);
  }
  .body-top>div {
    flex: 1;
    text-align: center;
    padding-top: 30px;
  }
  .body-top>div:nth-child(2) {
    border-left: 1px solid rgba(100,100,100,.1);
    border-right: 1px solid rgba(100,100,100,.1);
  }
  .body-top>div>div {
    margin-bottom: 10px;
  }
  .body-top>div>div>span {
    color: var(--color-high-text);
    font-size: 18px;
    font-weight: bold;
  }
  .body-top1>div:nth-child(3) {
    border-right: 1px solid rgba(100,100,100,.1);
  }
  .body-top1>div {
    flex: 1;
    text-align: center;
    padding-top: 20px;
  }
  .body-bottom>div {
    height: 45px;
    padding: 2px 10px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    position: relative;
  }
  .body-bottom>div>img {
    margin: 5px 8px;
  }
  .body-bottom>div>span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
</style>