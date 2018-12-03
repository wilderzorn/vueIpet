import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

import App from "./views/app.vue"
//平台门店入口连接器
import StoreLogin from "./views/storeLogin.vue"
import FlatLogin from "./views/flatLogin.vue"
//门店连接器
import storeInfo from "./views/storeinfo.vue"
import storeReg from "./views/storereg.vue"

//平台连接器
import flatReg from "./views/flatreg.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: App
    },
    {
      path: '/storelogin/:username',//动态路径
      name: '_storelogin',
      component: StoreLogin
    },
    {
      path: '/flatlogin/:username',//动态路径
      name: '_flatlogin',
      component: FlatLogin
    },
    //门店 平台入口
    {
      path: '/storelogin',
      name: 'storeLogin',
      component: StoreLogin
    },
    {
      path: '/flatlogin',
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
      path: '/storeinfo',
      name: 'storeInfo',
      component: storeInfo
    },
    //平台登陆注册页面
    {
      path: '/flatreg',
      name: 'flatReg',
      component: flatReg
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
      },
      ]
    }
  ]
})
