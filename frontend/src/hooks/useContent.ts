import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addContent, getContent } from "../api/content.api"
import { toast } from "sonner"
import { isAxiosError } from "axios"

export const useContent = () => {
    // get all contents
    const { data: allContent, isLoading } = useQuery({
        queryKey: ['contents'],
        queryFn: getContent
    })

    // add a new content
    const queryClient = useQueryClient()
    const { mutate: addNewContent } = useMutation({
        mutationFn: addContent,
        onSuccess: (data) => {
            toast.success(data.message)
        },
        onError: (error) => {
            if(isAxiosError(error)){
                toast.error(error.response?.data.message)
            }
        },
        onSettled: () => {
            // query with 'contents' key will be invalidated
            queryClient.invalidateQueries({ queryKey: ['contents'] })
        }
    })
    return { allContent , isLoading, addNewContent }
}