import { useMutation } from "@tanstack/react-query"
import { signin, signup } from "../api/user.api"
import { toast } from "sonner"
import { isAxiosError } from "axios"
import { useNavigate } from "react-router-dom"

export const useAuth = () => {
    const navigate = useNavigate()
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
        onSuccess: (data) => {
            toast.success(data.message)
            localStorage.setItem('token', data.token)
            navigate('/')
        },
        onError: (error) => {
            if(isAxiosError(error)){
                toast.error(error.response?.data.message)
            }
        }
    })

    return { userSignup, isSignupPending, userSignin, isSigninPending }
}