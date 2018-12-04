
export default {
  namespaced: true,
  state: {
    curPage: 1,
    eachPage: 10,
    maxPage: 0,
    total: 0,
    rows: [],
    update: {
      goodsName: "",
      goodsType: "",
      goodsMaterial: "",
      goodsCanFor: "",
      goodsOnlyFor: "",
      goodsSize: "",
      goodsTaste: "",
      goodsSpecial: "",
      goodsRegion: "",
      goodsDate: "",
      goodsTime: "",
      goodsSupplier: "",
      goodsIntro: "",
      goodsPrice: 0,
      goodsImg: [],
    }
  },
  mutations: {
    getGoodsByPage(state, data) {//把请求回来的数据装在state里面
      Object.assign(state, data)
    },
    setCurPage(state, curPage) {//修改state里的值
      state.curPage = curPage;
    },
    setEachPage(state, eachPage) {
      state.eachPage = eachPage
    },
    updateGoodsByPage(state, data) {
      Object.assign(state.update, data[0])
      // console.log(data);    
    },
  },

  actions: {
    //请求所有数据
    async getGoodsByPageAsync(context, { curPage = 1, eachPage = 10 } = {}) {//把要查询的条件传过去，拿到相应的数据
      const data = await fetch(`/goods/getAllgoods?curPage=${curPage}&eachPage=${eachPage}`)//fetch跨域请求数据
        .then(response => response.json())//转格式
      // console.log(data);
      context.commit("getGoodsByPage", data)//异步转同步
    },
    //把新增的数据增加到数据库
    async getAddtodoAsync(context, form) {
      let { goodsName, goodsType, goodsMaterial, goodsCanFor, goodsOnlyFor, goodsSize, goodsTaste, goodsSpecial, goodsRegion, goodsDate
        , goodsTime, goodsSupplier, goodsIntro, goodsPrice } = form
      const data = await fetch(`/goods/getAddtodo?goodsName=${goodsName}&goodsType=${goodsType}&goodsMaterial=${goodsMaterial}&goodsCanFor=${goodsCanFor}&goodsOnlyFor=${goodsOnlyFor}&goodsSize=${goodsSize}&goodsTaste=${goodsTaste}&goodsSpecial=${goodsSpecial}&goodsRegion=${goodsRegion}&goodsDate=${goodsDate}&goodsTime=${goodsTime}&goodsSupplier=${goodsSupplier}&goodsIntro=${goodsIntro}&goodsPrice=${goodsPrice}`)//fetch往数据库放数据
      return data
    },
    //把要修改的id的相应数据请求回来
    async getUpdateByPageAsync(context, updateId) {//把要查询的条件传过去，拿到相应的数据
      const data = await fetch(`/goods/updateGoods?updateId=${updateId}`)//fetch跨域请求数据
        .then(response => response.json())//转格式
      context.commit("updateGoodsByPage", data)//异步转同步
    },
    //把修改后的数据传到数据库post方法
    async getUpdateDataAsync(context, msg) {
      // console.log(msg);
      const data = await fetch(`/goods/storeGoods`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(msg)
      })
    },
    //把相应的删除
    async getRemoveByPageAsync(context, removeId) {//把要查询的条件传过去，拿到相应的数据
      const data = await fetch(`/goods/removeGoods?removeId=${removeId}`)//fetch跨域请求数据
      //     .then(response => response.json())//转格式
      // context.commit("updateGoodsByPage", data)//异步转同步
    },
  },
  watch: {

  }
}