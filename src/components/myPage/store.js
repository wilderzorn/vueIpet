export default {
    namespaced: true,
    state: {
        rows: []
    },
    actions: {
        async setLandesByIdAsync(context, setLandesId) {
            console.log(setLandesId);
            let data = await fetch(`/shop/setLandesByIdAsync?_id=${setLandesId.setLandesId}`)   // fetch方法跨域请求数据
                .then(response => response.json())
            context.commit("setLandesById", data)
        }
    }

}