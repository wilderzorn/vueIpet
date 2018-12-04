import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

import App from "./views/app.vue"
//平台门店入口连接器
import StoreLogin from "./views/storeLogin.vue"
import FlatLogin from "./views/flatLogin.vue"
//门店连接器
import storeReg from "./views/storereg.vue"

//平台连接器
import flatReg from "./views/flatreg.vue"


Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/member',
      name: 'users',
      component: () => import('./views/users.vue')
    },
    {
      path: '/users',
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
    {
      path: '/storelogin/:username',// 门店登录动态路径
      name: '_storelogin',
      component: StoreLogin
    },
    {
      path: '/flatlogin/:username',//平台登录动态路径
      name: '_flatlogin',
      component: FlatLogin
    },
    //门店 平台入口
    {
      path: '/',
      name: 'storeLogin',
      component: StoreLogin
    },
    {
      path: '/flatlogin',     // 平台
      name: 'flatLogin',
      component: FlatLogin
    },
    //门店登陆注册页面
    {
      path: '/storereg',
      name: 'storeReg',
      component: storeReg
    },
    {
      path: '/flatinfo',
      name: 'flatinfo',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/flatinfo.vue'),
      children: [{//二级路由
        path: "flat",
        name: 'flat',
        component: () => import(/* webpackChunkName: "about" */ './components/flat/flat.vue')
      },
      {
        path: "authorizer",
        name: 'authorizer',
        component: () => import(/* webpackChunkName: "about" */ './components/authorizer/authorizer.vue')
      }],
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
        //商品
        {
          path: 'addShop',
          name: 'addShop',
          component: () => import('./components/myShop/addShop.vue')
        },
        {
          path: 'employee/:shopId',
          name: '_employee',
          component: () => import('./components/myShop/employeeList.vue')
        },
        {
          path: 'goodsList/:shopId',
          name: '_goodsList',
          component: () => import('./components/myShop/goodsList.vue')
        },
        {
          path: 'myGoods',
          name: 'myGoods',
          component: () => import('./components/myGoods/app.vue'),
        },
        {
          path: 'update/:updateId',
          name: 'updateMygoods',
          component: () => import('./components/myGoods/update.vue')
        },
        {
          path: 'addTodo',
          name: 'addTodo',
          component: () => import('./components/myGoods/addTodo.vue')
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
          component: () => import('./components/myService/app.vue'),
        },
        {
          path: 'addService',
          name: 'addService',
          component: () => import('./components/myService/addService.vue')
        }
      ]
    }
  ]
})
