import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // const token = req.headers.authorization?.split(' ')[1]
        const token = req.cookies.token
        if(!token){
            res.status(401).json({
                message: 'Unauthorized request'
            })
            return
        }
        
        const decode = jwt.verify(token, process.env.JWT_SECRET_PASSWORD!)
        // @ts-ignore
        req.userId = decode.userId
        next()
    } catch (error: any) {
        // throw error
        res.status(401).json({
            message: 'Token verification failed',
            error
        })
    }
}