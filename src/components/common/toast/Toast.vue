<template>
  <div class="toast" v-show="show">{{message}}</div>
</template>

<script>
  export default {
    name: "Toast",
    props: {
      message: {
        type: String,
        default: ''
      },
      show: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      isShow() {

      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 8px 10px;
    border-radius: 10px;
    color: #fff;
    background-color: rgba(0,0,0,.5);
  }
</style>