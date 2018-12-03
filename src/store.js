import Vue from 'vue'
import Vuex from 'vuex'
import myGoodsApp from "./components/myGoods/store.js"
import myServiceApp from "../src/components/myService/store.js"
import myShopApp from './components/myShop/store.js'
import myPetApp from './components/myPet/store.js'
import myPageApp from './components/myPage/store.js';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    myShopApp,
    myPetApp,
    myGoodsApp,
    myServiceApp,
    myPageApp
  },
})