import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NProgress from 'nprogress'
import '../node_modules/nprogress/nprogress.css'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = new Router({ 
  mode: 'history', 
  base: process.env.BASE_URL,
  routes: routes 
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
