import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'users',
      component: () => import('./views/users.vue')
    },
    {
      path: '/users/ ',
      name: '_users',
      component: () => import('./views/users.vue')
    },


    {
      path: '/login',
      name: 'login',
      component: () => import('./components/myPage/login.vue')
    },
    {
      path: '/reg',
      name: 'reg',
      component: () => import('./components/myPage/reg.vue')
    },





    //   {
    //     path: '/info',
    //     name: 'info',
    //     component: () => import('./views/info.vue'),
    //     children: [
    //       {
    //         path: 'myShop',
    //         name: 'myShop',
    //         component: () => import('./components/myShop/app.vue')
    //       },
    //       {
    //         path: 'myGoods',
    //         name: 'myGoods',
    //         component: () => import('./components/myGoods/app.vue')
    //       },
    //       {
    //         path: 'myPet',
    //         name: 'myPet',
    //         component: () => import('./components/myPet/app.vue')
    //       },
    //       {
    //         path: 'myService',
    //         name: 'myService',
    //         component: () => import('./components/myService/app.vue')
    //       }
    //     ]
    //   }


  ]
})
