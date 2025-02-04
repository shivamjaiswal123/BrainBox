import axios from "axios"

interface User {
    username: string,
    password: string
}
const BASE_URL=import.meta.env.VITE_BASE_URL

export const signup = async (userData: User) => {
    const { data }  = await axios.post(`${BASE_URL}/api/v1/signup`, userData)
    return data
}

export const signin = async (userData: User) => {
    const { data }  = await axios.post(`${BASE_URL}/api/v1/signin`, userData, {
        withCredentials: true
    })
    return data
}

export const getSession = async () => {
    try {
        const { data }  = await axios.get(`${BASE_URL}/api/v1/me`, {
            withCredentials: true
        })
        return data
    } catch (error) {
        return null
    }
}

export const logout = async () => {
    const { data }  = await axios.post(`${BASE_URL}/api/v1/logout`,{}, {
        withCredentials: true
    })
    return data
}