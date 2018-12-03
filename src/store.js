import Vue from 'vue'
import Vuex from 'vuex'
import myGoodsApp from "./components/myGoods/store.js"
import myServiceApp from "../src/components/myService/store.js"
import myShopApp from './components/myShop/store.js'
import myPetApp from './components/myPet/store.js'
import myPageApp from './components/myPage/store.js';

import LoginApp from "./views/app.vue"
import Flat from "./components/flat/flat.vue"
import flatApp from "./components/flat/flat.js"
import StoreregApp from "./views/storeregApp.js"
import StoreLoginAPP from "./views/storeLogin.js"
import FlatLoginApp from "./views/flatlogin.js"
import AuthorizerApp from "./components/authorizer/authorizer.js"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    LoginApp,
    Flat,
    flatApp,
    StoreregApp,
    StoreLoginAPP,
    FlatLoginApp,
    AuthorizerApp,
    myShopApp,
    myPetApp,
    myGoodsApp,
    myServiceApp,
    myPageApp
  },
})
