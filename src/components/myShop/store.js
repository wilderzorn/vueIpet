
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
    }
  },
  actions: {
    async getAllShopAsync(context, { curPage = 1, eachPage = 5 } = {}) {
      let data = await fetch(`/shop/getAllPetsByPageAsync?curPage=${curPage}&eachPage=${eachPage}`)   // fetch方法跨域请求数据
        .then(response => response.json())
      context.commit("getAllShop", data)
    }
  },
  watcher: {

  }
}
