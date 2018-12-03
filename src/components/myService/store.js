export default {
  namespaced: true,//命名空间
  //默认值，数据
  state: {
    curPage: 1,
    eachPage: 5,
    total: 0,
    maxPage: 0,
    rows: [],
    serviceInfo:
    {
      serviceName: "",
      serviceType: "",
      serviceSchedule: "",
      serviceCanFor: "",
      serviceDetial: "",
      serviceTime: "",
      serviceLevel: "",
      servicePrice: "",
      serviceImg: []
    }
  },

  //同步方法
  mutations: {
    //列表，分页
    getAllServicesByPage(state, payload) {
      Object.assign(state, payload)
    },
    setCurPage(state, curPage) {
      state.curPage = curPage
    },
    setEachPage(state, eachPage) {
      state.eachPage = eachPage
    },
    // 修改
    uptateServiceById(state, payload) {
      Object.assign(state.serviceInfo, payload[0]);
    },
  },

  actions: {
    //列表，分页
    async getAllServicesByPageAsync(context, { curPage = 1, eachPage = 6 } = {}) {
      const data = await fetch(`/service/getAllServicesByPage?curPage=${curPage}&eachPage=${eachPage}`)
        .then(response => response.json())
      context.commit("getAllServicesByPage", data)
    },

    //新增
    async addServicesAsync(context, msg) {
      const data = await fetch(`/service/addServices`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(msg)
      })
    },

    //修改页面显示
    async upDateServicesByIdsAsync(context, _id) {
      const data = await fetch(`/service/upDateServicesById?_id=${_id}`)
        .then(response => response.json())
      context.commit("uptateServiceById", data)
    },

    //修改
    async upDateServicesAsync(context, msg) {
      // console.log(msg);
      const data = await fetch(`/service/upDateServices`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(msg)
      })
    },

    //删除
    async removeServicesAsync(context, _id) {
      const data = await fetch(`/service/removeServices`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(_id)
      })
    },

    //上传图片
    // async picUpLoadAsync(context, { _id, url } = {}) {
    //   // console.log(_id, url);
    //   const data = await fetch(`/service/upload?_id=${_id}&url=${url}`)
    //     .then(response => response.json())
    //   // context.commit("uptateServiceById", data)
    // },

  }
}