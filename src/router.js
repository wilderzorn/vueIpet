import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('./views/info.vue'),
      children: [
        {
          path: 'myShop',
          name: 'myShop',
          component: () => import('./components/myShop/app.vue')
        },
        {
          path: 'addShop',
          name: 'addShop',
          component: () => import('./components/myShop/addShop.vue')
        },
        {
          path: 'myGoods',
          name: 'myGoods',
          component: () => import('./components/myGoods/app.vue')
        },
        {
          path: 'myPet',
          name: 'myPet',
          component: () => import('./components/myPet/app.vue')
        },
        {
          path: 'addPet',
          name: 'addPet',
          component: () => import('./components/myPet/addPet.vue')
        },
        {
          path: 'myService',
          name: 'myService',
          component: () => import('./components/myService/app.vue')
        }
      ]
    }
  ]
})
