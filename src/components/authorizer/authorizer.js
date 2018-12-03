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
        getStudentsByPage(state, payload) {
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
        async getStudentsByPageAsync(context, { curPage = 1, eachPage = 5 } = {}) {
            const data = await fetch(`/users/authorizerByPage?curPage=${curPage}&eachPage=${eachPage}`)
                .then(response => response.json())
            context.commit("getStudentsByPage", data)
        },
        async authorizerUsers(context, msg) {
            const data = await fetch(`/users/authorizerUsers`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(msg)
            })
        },
    }
}