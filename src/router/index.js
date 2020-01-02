import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Vip from '../views/Vip.vue'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import playPage from '../views/playPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/vip',
    name:'vip',
    component:Vip
  },
  {
    path: '/search',
    name:'search',
    component:Search
  },
  {
    path: '/playpage',
    name: 'playpage',
    component:playPage
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
