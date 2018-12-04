export default {
  namespaced: true,
  mutations: {},
  actions: {
    //登陆
    async loginAsync({ commit }, users) {
      return await fetch(`/users/login`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(users)
      }).then(res => { return res.json() })
    },

  }
}