import Vue from 'vue'
import Router from 'vue-router'

const home = () =>import('../views/home/Home.vue')
const category = () =>import('../views/category/category.vue')
const cart = () =>import('../views/cart/cart.vue')
const profile = () =>import('../views/profile/profile.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/category',
      name: 'category',
      component: category
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
  ],
  mode:'history',
})
