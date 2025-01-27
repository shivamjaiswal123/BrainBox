import axios from "axios"
import { BASE_URL } from "./content.api"

const config = {
    headers: {
        Authorization: 'Bearer '+ localStorage.getItem('token')
    }
}

export const getSharingStatus = async () => {
    const { data } = await axios.get(`${BASE_URL}/api/v1/brain/sharing-status`, config)
    return data.sharing
}