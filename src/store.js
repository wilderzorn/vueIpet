import Vue from 'vue'
import Vuex from 'vuex'

import myServiceApp from "../src/components/myService/store.js"
import myShopApp from './components/myShop/store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    myServiceApp,
    myShopApp
  }
})