import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Card from './views/Card.vue'
import List from './views/List.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/card',
      name: 'card',
      component: Card,
    },
    {
      path: '/list',
      name: 'list',
      component: List,
    },
  ],
})
