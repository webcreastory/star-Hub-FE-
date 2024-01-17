import api from './api'
const getDatas = async () => {
    const response = await api.get('/api/starshare')
    // console.log(response.data)
    return response.data
}
const postDatas = async (newStarShare) => {
    const response = await api.post('/api/starshare', newStarShare)
    // console.log(response.data)
    return response.data
}
const putDatas = async (newStarShare) => {
    const response = await api.put(`starshare/${newStarShare[1].id}`, newStarShare[0])
    // console.log(response.data)
    return response.data
}
const deleteDatas = async (id) => {
    const response = await api.delete(`/api/starshare/${id}`)
    // console.log(response.data)
    return response.data
}

// const getLikeDatas = async (shareId) => {
//     const response = await api.get(`/api/starshare/${shareId}/like`)
//     // console.log(response.data)
//     return response.data
// }

export { getDatas , postDatas, putDatas, deleteDatas}
