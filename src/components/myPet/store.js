
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
        }
    },
    actions: {
        async getAllPetsAsync(context, { curPage = 1, eachPage = 5 } = {}) {
            let data = await fetch(`/pets/getAllPetsByPageAsync?curPage=${curPage}&eachPage=${eachPage}`)   // fetch方法跨域请求数据
                .then(response => response.json())
            context.commit("getAllPets", data)
        }
    },
    watcher: {

    }
}
