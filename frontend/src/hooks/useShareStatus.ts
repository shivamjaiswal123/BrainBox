import { useQuery } from "@tanstack/react-query"
import { getSharingStatus } from "../api/brain.api"

export const useShareStatus = (open: boolean) => {
    return useQuery({
        queryKey: ['share-status'],
        queryFn: getSharingStatus,
        enabled: open
     })
}