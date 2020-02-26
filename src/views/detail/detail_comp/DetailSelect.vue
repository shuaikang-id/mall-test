<template>
  <div class="select">
    <div class="touch-area" @click="closeClick"></div>
    <div class="content-area">
      <div class="content-top">
        <img :src="select[0]" alt="">
        <span>￥ {{select[1]}}</span>
        <img class="close"
             src="../../../assets/img/detail/close.svg"
             @click="closeClick">
        <div>
          <div>尺码：{{sizes[currentIndex]}}</div>
          <div>件数：{{counter}}</div>
        </div>
      </div>
      <Bscoll class="content" ref="scroll">
        <div class="content-bottom">
          <div class="setSize">
            <span>尺寸</span>
            <div class="sizes">
              <div v-for="(item,index) in sizes"
                   class="size"
                   @click="itemClick(index)"
                   :class="{isActive: index === currentIndex}">{{item}}</div>
            </div>
          </div>
          <div class="setCount">
            <span>购买数量</span>
            <div>
              <div @click="sub"
                   :class="{display: this.counter <=1 }">-</div>
              <div>{{counter}}</div>
              <div @click="add">+</div>
            </div>
          </div>
        </div>
      </Bscoll>
      <div class="content-checked" @click="confirmClick">确定</div>
    </div>
    <toast :message="message" :show="isShow"/>
  </div>
</template>

<script>
  import Toast from "../../../components/common/toast/Toast";
  import Bscoll from "../../../components/common/bscoll/Bscoll";
  export default {
    name: "DetailSelect",
    components: {
      Bscoll,
      Toast
    },
    data() {
      return {
        sizes: [],
        counter: 1,
        currentIndex: 0,
        isClose: false,
        message: '',
        isShow: false
      }
    },
    props: {
      select: {
        type: Array,
        default: []
      },
      iid: {
        type: String,
        default: ''
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
      },
      sub() {
        this.counter --;
      },
      add() {
        this.counter ++;
      },
      closeClick() {
        this.$emit('closeClick')
      },
      confirmClick() {
        const product = {};
        product.iid =  this.iid;
        product.img = this.select[0];
        product.title = this.select[3];
        product.desc = this.select[4];
        product.price = this.select[1];
        product.counter = this.counter;
        product.size = this.sizes[this.currentIndex];
        product.state = false;
        this.$store.dispatch('add',product)
          .then(res => {
          this.message = res;
            this.messageShow();
        }).catch(() => {
          this.message = '添加失败，请重试';
          this.isShow = true;
          this.messageShow();
        })
        this.closeClick();
      },
      messageShow() {
        this.isShow = true;
        setTimeout(() => {
          this.isShow = false;
          this.message = ''
        },1200)
      }
    },
    created() {
      setTimeout(() => {
        this.sizes.push(...(this.select[2][0]['value'].split(',')));
        this.$refs.scroll.refresh();
      },1000);
    }
  }
</script>

<style scoped>
  .select {
    width: 100%;
    height: calc(100% + 44px);
    background-color: rgba(0,0,0,.5);
    position: relative;
    z-index: 10000;
  }
  .touch-area{
    width: 100%;
    height: calc(100% - 400px);
  }
  .content-area {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 400px;
    border-radius: 20px 20px 0 0;
    background-color: var(--color-background);
    padding: 5px;
  }
  .content-top {
    position: relative;
    height: 100px;
    border-bottom: 2px solid rgba(100,100,100,.1);
    margin-bottom: 20px;
  }
  .content-top>img:nth-child(1) {
    position: relative;
    top: -80px;
    margin: 10px;
    width: 100px;
    height: 140px;
    border-radius: 10px;
  }
  .close {
    position: absolute;
    top: 5px;
    right: 5px;
  }
  .content-top>span {
    position: absolute;
    top: 23px;
    left: 120px;
    color: var(--color-tint);
  }
  .content-top>div {
    position: absolute;
    top: 45px;
    left: 120px;
    font-size: 12px;
  }
  .sizes {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 14px;
    border-bottom: 2px solid rgba(100,100,100,.1);
    padding-bottom: 10px;
    margin: 0 20px;
  }
  .size {
    padding: 8px;
    margin: 4px;
    background-color: #f5f5f5;
    text-align: center;
    border-radius: 10px;
  }
  .setSize>span {
    margin-left: 20px;
  }
  .content {
    height: 230px;
    overflow: hidden;
  }
  .setCount {
    margin: 10px 20px;
    height: 35px;
  }
  .setCount>span {
    float: left;
  }
  .setCount>div {
    float: right;
    display: flex;
    line-height: 30px;
    text-align: center;
  }
  .setCount>span {
    margin-top: 5px;
  }
  .setCount>div>div {
    flex: 1;
    width: 30px;
    height: 30px;
    background-color: #f5f5f5;
    border: 1px solid var(--color-background);
    font-weight: bold;
  }
  .content-checked {
    width: 60%;
    height: 40px;
    background-color: var(--color-tint);
    margin: 3px auto;
    border-radius: 10px;
    line-height: 40px;
    font-size: 16px;
    color: #f5f5f5;
    text-align: center;
  }
  .isActive {
    background-color: var(--color-tint);
  }
  .display {
    pointer-events: none;
    color: #a2a2a2;
  }
</style>