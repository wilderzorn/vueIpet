import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import myShopApp from './components/myShop/store.js'

export default new Vuex.Store({
  modules: {
    myShopApp
  }
})