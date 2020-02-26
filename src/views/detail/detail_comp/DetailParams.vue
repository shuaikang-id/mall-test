<template>
  <div class="params" v-if="Object.keys(params).length !== 0">
    <table v-for="(table,x) in params.sizes"
           :key="x"
           class="size">
      <tr v-for="(tr,y) in table" :key="y">
        <td v-for="(td,z) in tr">{{td}}</td>
      </tr>
    </table>
    <table class="info">
      <tr v-for="(info,index) in params.infos">
        <td class="info-key">{{info.key}}</td>
        <td class="info-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="img" v-if="params.image.length !== 0">
      <img :src="params.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParams",
    props: {
      params: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style scoped>
  .params {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .size {
    width: 100%;
    border-collapse: collapse;
  }
  .size tr {
    height: 42px;
  }
  .size tr td {
    border-top: 1px solid rgba(100,100,100,.1);
  }
  .info {
    width: 100%;
    border-collapse: collapse;
    border-top: 3px solid rgba(0,0,0,.1);
  }
  .info>tr>td {
    height: 42px;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .info-key {
    width: 95px;
  }
  .info-value {
    color: #eb4868
  }

  .img>img {
    width: 100%;
  }
</style>