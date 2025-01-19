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
    const { data }  = await axios.post(`${BASE_URL}/api/v1/signin`, userData)
    return data
}