import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import myShopApp from './components/myShop/store.js';
import myPageApp from './components/myPage/store.js';

export default new Vuex.Store({
  modules: {
    myShopApp,
    myPageApp
  }
})