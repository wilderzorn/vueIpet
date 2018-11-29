
export default {
  namespaced: true,
  state: {
    curPage: 1,
    eachPage: 5,
    total: 0,
    maxPage: 0,
    rows: []
  },
  mutations: {
    getAllShop(state, payload) {
      Object.assign(state, payload)
    },
    setCurPage(state, curPage) {
      state.curPage = curPage;
    },
    setEachPage(state, eachPage) {
      state.eachPage = eachPage
    },
    setShopById(state, payload) {
      state.rows = payload
    }
  },
  actions: {
    async getAllShopAsync(context, { curPage = 1, eachPage = 5 } = {}) {
      let data = await fetch(`/shop/getAllShopByPageAsync?curPage=${curPage}&eachPage=${eachPage}`)   // fetch方法跨域请求数据
        .then(response => response.json())
      context.commit("getAllShop", data)
    },
    async addShopAsync(context, msg) {
      let { shopName, shopLicenceNum, shopLicenceImg, shopAdd, shopLocation, shopCorporate, shopTel, shopImg, shopFeature, shopCommission } = msg
      let data = await fetch(`/shop/addShopAsync?shopName=${shopName}&shopLicenceNum=${shopLicenceNum}&shopLicenceImg=${shopLicenceImg}&shopAdd=${shopAdd}&shopLocation=${shopLocation}&shopCorporate=${shopCorporate}&shopTel=${shopTel}&shopImg=${shopImg}&shopFeature=${shopFeature}&shopCommission=${shopCommission}`)   // fetch方法跨域请求数据
    },
    async setShopByIdAsync(context, shopId) {
      console.log(shopId);
      let data = await fetch(`/shop/setShopByIdAsync?_id=${shopId.shopId}`)   // fetch方法跨域请求数据
        .then(response => response.json())
      context.commit("setShopById", data)
    }
  }
}
