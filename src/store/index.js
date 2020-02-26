import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addToCart(state,payload) {
      const oldInfo = state.cartList.find(i => i.iid === payload.iid)
      if(oldInfo) {
        oldInfo.counter += 1;
      }else{
        state.cartList.push(payload);
      }
    },
    delStore(state) {
      let delArr = state.cartList.filter(i => i.state === true).map(i => i.iid)
      for(let i in state.cartList) {
          for(let j of delArr) {
            if(state.cartList[i].iid === j) {
              state.cartList.splice(i,1);
            }
          }
        }
    }
  },
  actions: {
    add(context,payload) {
      return new Promise((resolve,reject) => {
        context.commit('addToCart',payload);
        resolve('在购物车等你奥');
      })
    },
    del(context) {
      return new Promise((resolve,reject) => {
        context.commit('delStore');
        resolve('操作成功');
      })
    }
  },

})

export default store;