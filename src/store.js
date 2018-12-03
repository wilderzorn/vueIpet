import Vue from 'vue'
import Vuex from 'vuex'

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
    AuthorizerApp
  }
})
