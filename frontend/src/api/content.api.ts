import axios from "axios"

const BASE_URL = import.meta.env.VITE_BASE_URL

const config = {
    headers: {
        Authorization: 'Bearer '+ localStorage.getItem('token')
    }
}

export const getContent = async () => {
    const { data }  = await axios.get(`${BASE_URL}/api/v1/content`, config)
    return data.content
}

export const addContent = async (content: any) => {
    const { data }  = await axios.post(`${BASE_URL}/api/v1/content`, content, config)
    return data
}