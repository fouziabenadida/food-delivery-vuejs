import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodDetails from '../components/FoodDetails'
import Cart from '../components/Cart'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeVue',
    component: HomeView
  },
  {
    path: '/food-details/:id',
    name: 'food-details',
    component: FoodDetails
  },
  {
    path: '/cart',
    name: 'cartView',
    component: Cart
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
