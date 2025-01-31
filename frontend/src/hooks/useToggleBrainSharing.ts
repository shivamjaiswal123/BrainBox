import { useMutation } from "@tanstack/react-query"
import { isAxiosError } from "axios"
import { toast } from "sonner"
import { toggleBrainSharing } from "../api/brain.api"

export const useToggleBrainSharing = () => {
    return useMutation({
        mutationFn: toggleBrainSharing,
        onSuccess: data => {
            toast.success(data.message)
        },
        onError: (error) => {
            if(isAxiosError(error)){
                toast.error(error.response?.data.message)
            }
        }
    })
}