import api from './api'

const getDatas = async () => {
    const response = await api.get('starshare')
    // console.log(response.data)
    return response.data
}

const postDatas = async (newStarShare) => {
    const response = await api.post('starshare', newStarShare)
    
    return response.data
}

const putDatas = async (newStarShare) => {
    const response = await api.put(`starshare/${newStarShare[1].id}`, newStarShare[0])
    return response.data
}

const deleteDatas = async (id) => {
    const response = await api.delete(`starshare/${id}`)
    return response.data
}

const getLikeDatas = async () => {
    const response = await api.get('api')
    return response.data
}

export { getDatas , postDatas, putDatas, deleteDatas, getLikeDatas}