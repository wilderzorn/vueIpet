
export default {
    namespaced: true,
    state: {
        curPage: 1,
        eachPage: 5,
        total: 0,
        maxPage: 0,
        rows: [],
        petInfo: {
            petsName: "",
            petsSpecies: "",
            petsGender: "",
            petsBirthday: "",
            petsType: "",
            petsColor: "",
            petsPrice: "",
            petsCharacter: "",
            petsImgs: ""
        }
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
        },
        // 修改
        uptatePetById(state, payload) {
            Object.assign(state.petInfo, payload[0]);
        },
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
        //修改页面显示
        async updatePetByIdAsync(context, _id) {
            const data = await fetch(`/pets/updatePetByIdAsync?_id=${_id}`)
                .then(response => response.json())
            context.commit("uptatePetById", data)
        },

        //修改
        async updatePetAsync(context, msg) {
            // console.log(msg);
            const data = await fetch(`/pets/updatePetAsync`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(msg)
            })
        },
        //删除
        async removePetAsync(context, _id) {
            const data = await fetch(`/pets/removePetAsync`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(_id)
            })
        },

    },
    watcher: {

    }
}
