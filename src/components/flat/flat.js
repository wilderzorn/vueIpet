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
        usersListByPage(state, payload) {
            Object.assign(state, payload)
        },
        setCurPage(state, curPage) {
            state.curPage = curPage
        },
        setEachPage(state, eachPage) {
            state.eachPage = eachPage
        }
    },
    actions: {
        //fetch请求数据方法
        async usersListByPageAsync(context, { curPage = 1, eachPage = 5 } = {}) {
            const data = await fetch(`/users/usersListByPage?curPage=${curPage}&eachPage=${eachPage}`)
                .then(response => response.json())
                console.log(data)
            //commit触发mutations
            context.commit("usersListByPage", data)
        },
        //修改
        async upDateUsersAsync(context, msg) {
            const data = await fetch(`/users/upDateUsers`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(msg)
            })
        },
        //删除
        async removeUsersAsync(context, _id) {
            const data = await fetch(`/users/removeUsers`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(_id)
            })
        },


    }
}