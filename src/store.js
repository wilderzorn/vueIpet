import Vue from 'vue'
import Vuex from 'vuex'
import myGoodsApp from "./components/myGoods/store.js"

import myServiceApp from "../src/components/myService/store.js"
import myShopApp from './components/myShop/store.js'
import myPetApp from './components/myPet/store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    myShopApp,
    myPetApp,
    modules: {//module模块化
      myGoodsApp,
      myServiceApp,
      myShopApp
    },
    state: {

    },
    mutations: {

    },
    actions: {

    }
  }
})