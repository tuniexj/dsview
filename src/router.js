import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import level from './views/level.vue'
import dsview from './views/dsview.vue'

Vue.use(Router)

let createRouter = key => {
  return {
    path: '/' + key,
    name: key,
    component: () => import(`./views/${key}.vue`)
  }
}
let views = []
let viewRoutes = views.map(value => createRouter(value))

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home/:name',
      name: 'level',
      component: level
    },
    {
      path: '/dsview',
      name: 'dsview',
      component: dsview
    },
    ...viewRoutes
  ]
})
