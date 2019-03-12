import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'

Vue.use(Router)

let createRouter = key => {
  return {
    path: '/' + key,
    name: key,
    component: () => import(`./views/${key}.vue`)
  }
}
let views = ['list', 'stack', 'queue', 'binaryTree', 'map']
let viewRoutes = views.map(value => createRouter(value))

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    ...viewRoutes
  ]
})
