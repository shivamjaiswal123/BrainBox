import axios, { isAxiosError } from "axios"
import { BASE_URL } from "./content.api"

const config = {
    withCredentials: true
}

export const toggleBrainSharing = async (share: { share: boolean }) => {
    const { data } = await axios.post(`${BASE_URL}/api/v1/brain/share`, share, config)
    return data
}

export const getSharingStatus = async () => {
    const { data } = await axios.get(`${BASE_URL}/api/v1/brain/sharing-status`, config)
    return data.sharing
}

export const getSharedBrainContent = async (link: string) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/api/v1/brain/${link}`);
        return data;
    } catch (error) {
        if(isAxiosError(error)) {
            return error.response?.data.message
        }
    }
}