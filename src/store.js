import Vue from 'vue'
import Vuex from 'vuex'

import myServiceApp from "../src/components/myService/store.js"

Vue.use(Vuex)

<<<<<<< HEAD
export default new Vuex.Store({
  modules: {
    myServiceApp
=======
import myShopApp from './components/myShop/store.js'

export default new Vuex.Store({
  modules: {
    myShopApp
>>>>>>> 6666cb7bba96d5931c40275393bcfce18a8213f3
  }
})