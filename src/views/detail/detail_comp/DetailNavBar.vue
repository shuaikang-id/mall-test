<template>
    <nav-bar>
      <div slot="left" class="back" @click="back">
        <img src="../../../assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles"
             @click="itemClick(index)"
             :class="{isActive: currentIndex === index}">{{item}}</div>
      </div>
    </nav-bar>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('titleClick',index);
      },
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
  }
  .title>div {
    flex: 1;
    font-size: 13px;
    margin: 0 8px;
  }
  .isActive {
    color: var(--color-tint)
  }
  .back>img{
    height: 25px;
    margin-top: 10px;
  }
</style>