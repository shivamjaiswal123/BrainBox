import { useMutation } from "@tanstack/react-query"
import { shareBrain } from "../api/content.api"
import { isAxiosError } from "axios"
import { toast } from "sonner"

export const useBrain = () => {
    return useMutation({
        mutationFn: shareBrain,
        onSuccess: data => {
            toast.success(data.message)
        },
        onError: (error) => {
            if(isAxiosError(error)){
                toast.error(error.response?.data.message)
            }
        },
    })
}