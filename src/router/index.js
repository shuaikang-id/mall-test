import Vue from 'vue';
import VueRouter from 'vue-router';

const home = () => import('../views/home/home.vue');
const cart = () => import('../views/cart/cart');
const profile = () => import('../views/profile/profile');
const detail = () => import('../views/detail/detail');
const declaration = () => import('../views/declaraction/declarAction')
Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/declaration'
  },{
    path: '/declaration',
    component: declaration
  },{
    path: '/home',
    component: home
  },{
    path: '/cart',
    component: cart
  },{
    path: '/profile',
    component: profile
  },{
    path: '/detail',
    component: detail
  }
];

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router;