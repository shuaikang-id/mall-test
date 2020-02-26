<template>
  <div id="cart-list">
      <cart-list-item v-for="(item,index) in cartList"
                      :product="item"
                      :key="index"/>
  </div>
</template>

<script>
  import CartListItem from "./CartListItem";
  export default {
    name: "CartList",
    data() {
      return {
        stateList: []
      }
    },
    components: {
      CartListItem,
    },
    computed: {
      cartList() {
        return this.$store.state.cartList
      }
    }
  }
</script>

<style scoped>
</style>