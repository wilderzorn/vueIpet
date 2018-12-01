
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
        getAllPets(state, payload) {
            Object.assign(state, payload)
        },
        setCurPage(state, curPage) {
            state.curPage = curPage;
        },
        setEachPage(state, eachPage) {
            state.eachPage = eachPage
        }
    },
    actions: {
        async getAllPetsAsync(context, { curPage = 1, eachPage = 5 } = {}) {
            let data = await fetch(`/pets/getAllPetsByPageAsync?curPage=${curPage}&eachPage=${eachPage}`)   // fetch方法跨域请求数据
                .then(response => response.json())
            context.commit("getAllPets", data)
        },
        async addPetAsync(context, msg) {
            const data = await fetch(`/pets/addPetAsync`, {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(msg)
            })
           
        },
    },
    watcher: {

    }
}
