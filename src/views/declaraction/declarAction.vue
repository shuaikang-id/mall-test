<template>
  <div id="declare">
    <div>
      <h2>请注意：
        <br/>
        此为仿制测试页面！</h2>
      <label for="check">
        <input type="checkbox" id="check" v-model="isAgree">知晓
      </label>
      <br/>
    </div>
    <div class="check" @click="declar" :class="{isActive: !isAgree}">GO!</div>
  </div>
</template>

<script>
  export default {
    name: "declarAction",
    data() {
      return {
        isAgree: false
      }
    },
    methods: {
      declar() {
        this.$router.replace('/home');
      }
    }
  }
</script>

<style scoped>
  #declare {
    position: relative;
    height: 100vh;
    margin: 50% auto;
    text-align: center;
    z-index: 1000;
    background-color: #fff;
  }
  .check {
    margin-top: 30px;
    padding: 10px;
    display: inline-block;
    background-color: var(--color-tint);
    pointer-events:  auto;
  }
  .isActive {
    background-color: #a3a3a5;
    pointer-events: none;
  }
</style>