
export default {
  namespaced: true,
  state: {
    rows: [],
    employeeArr: [],
    goodsAry: [],
    petAry: [],
    serviceAry: [],
  },
  mutations: {
    getAllShop(state, payload) {
      state.rows = payload[0].shopId
    },
    setShopById(state, payload) {
      state.employeeArr = payload[0].shopEmployee
      state.goodsAry = payload[0].goodsId
      state.petAry = payload[0].petId
      state.serviceAry = payload[0].serviceId
    }
  },
  actions: {
    async addShopAsync(context, msg) {
      let { shopName, shopLicenceNum, shopLicenceImg, shopAdd, shopLocation, shopCorporate, shopTel, shopImg, shopFeature, shopCommission } = msg
      let data = await fetch(`/shop/addShopAsync?shopName=${shopName}&shopLicenceNum=${shopLicenceNum}&shopLicenceImg=${shopLicenceImg}&shopAdd=${shopAdd}&shopLocation=${shopLocation}&shopCorporate=${shopCorporate}&shopTel=${shopTel}&shopImg=${shopImg}&shopFeature=${shopFeature}&shopCommission=${shopCommission}`)   // fetch方法跨域请求数据
    },
    async setShopByIdAsync(context, shopId) {
      let data = await fetch(`/shop/setShopByIdAsync?_id=${shopId.shopId}`)   // fetch方法跨域请求数据
        .then(response => response.json())
      context.commit("setShopById", data)
    },
    async addOneEmployeeByIdAsync(context, msg) {
      return await fetch(`/shop/addOneEmployeeByIdAsync`, {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(msg)
      }).then(res => res)
    },
    async updataShopByIdAsync(context, msg) {
      return await fetch(`/shop/updataShopByIdAsync`, {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(msg)
      }).then(res => res)
    },
    async getAllUser(context, msg) {
      let data = await fetch(`/users/getAllUser?_id=${msg}`)   // fetch方法跨域请求数据
        .then(response => response.json())
      context.commit("getAllShop", data)
    },
    async addGoodsForShopAsync(context, msg) {
      return await fetch(`/shop/addGoodsForShopAsync`, {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(msg)
      }).then(res => res)
    },
    async addServerForShopAsync(context, msg) {
      return await fetch(`/shop/addServerForShopAsync`, {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(msg)
      }).then(res => res)
    },
    async addIpetForShopAsync(context, msg) {
      return await fetch(`/shop/addIpetForShopAsync`, {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(msg)
      }).then(res => res)
    },
  }
}
