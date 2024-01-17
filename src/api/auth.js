import api from './api'
import axios from 'axios'

const getDatas = async () => {
    const response = await api.get('starshare')
    // console.log(response.data)
    return response.data
}

// const postDatas = async (newStarShare) => {
//     const response = await api.post('starshare', newStarShare)
    
//     return response.data
// }
const postDatas = async (newStarShare) => {
    const response = await axios.post('http://3.37.123.243:8080/api/starshare', newStarShare)
    console.log(response)
    return response
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