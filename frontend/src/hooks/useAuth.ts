import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { signin, signup, getSession } from "../api/user.api"
import { toast } from "sonner"
import { isAxiosError } from "axios"
import { useNavigate } from "react-router-dom"

export const useAuth = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const { mutate: userSignup, isPending: isSignupPending } = useMutation({
        mutationFn: signup,
        onSuccess: (data) => {
            toast.success(data.message)
            navigate('/signin')
        },
        onError: (error) => {
            if(isAxiosError(error)){
                toast.error(error.response?.data.message)
            }
        }
    })

    const { mutate: userSignin, isPending: isSigninPending } = useMutation({
        mutationFn: signin,
        onSuccess: async (data) => {
            toast.success(data.message)
            localStorage.setItem('token', data.token)
            await queryClient.invalidateQueries({ queryKey: ['user'] })
            navigate('/')
        },
        onError: (error) => {
            if(isAxiosError(error)){
                toast.error(error.response?.data.message)
            }
        }
    })

    // get user session
    const { data: session, isLoading: gettingSession } = useQuery({
        queryKey: ['user'],
        queryFn: getSession
    })

    const handleLogout = () => {
        localStorage.removeItem('token');
        queryClient.removeQueries({ queryKey: ['user'] });
        navigate('/signin');
    };

    return { userSignup, isSignupPending, userSignin, isSigninPending, session, gettingSession, handleLogout }
}