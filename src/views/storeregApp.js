export default {
    namespaced: true,
    mutations: {},
    actions: {
        //注册
        async regAsync({ commit }, users) {
            return await fetch(`/users/reg`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(users)
            }).then(res => {return res.json()})
        },

    }
}