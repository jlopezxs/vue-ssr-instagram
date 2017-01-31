import Vue from 'vue'
import Home from '../components/Home.vue'
import Search from '../components/Search.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/search', component: Search }
  ]
})

export default router
