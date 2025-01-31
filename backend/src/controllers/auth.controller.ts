import { Request, Response } from "express";
import { z } from "zod";
import bcrypt from 'bcryptjs';
import { User } from "../models/user.model";
import jwt from "jsonwebtoken";

const validationSchema = z.object({
    username: z.string().min(3, 'Username must atleast 3 characters long'),
    password: z.string().min(6, 'Password must be atleast 6 characters long')
})

export const signup = async (req: Request, res: Response) => {
    const parsedPayload = validationSchema.safeParse(req.body)
    if(!parsedPayload.success){
        res.status(411).json({
            message: parsedPayload.error.errors[0].message
        })
        return
    }

    const { username, password } = req.body

    try {
        // check if user already exist
        const userExist = await User.findOne({ username })
        if(userExist){
            res.status(409).json({
                message: 'Username is already taken'
            })
            return
        }

        await User.create({
            username,
            password
        })

        res.json({
            message: 'User signed up successfully'
        })
    } catch (error: any) {
        // for unique constraint violation
        if(error.code == 11000){
            res.status(409).json({ message: 'Username is already taken...' });
        }
        res.status(500).json({
            message: 'Internal server error'
        });
    }
}

export const signin = async (req: Request, res: Response) => {
    const parsedPayload = validationSchema.safeParse(req.body)
    if(!parsedPayload.success){
        res.status(411).json({
            message: parsedPayload.error.errors[0].message
        })
        return
    }

    const { username, password } = req.body

    try {
        // check if user exist or not
        const userExist = await User.findOne({ username })
        if(!userExist){
            res.status(404).json({
                message: 'User does not exist'
            })
            return
        }

        // check if password is correct
        const isPasswordCorrect = await bcrypt.compare(password, userExist.password)
        if(!isPasswordCorrect){
            res.status(401).json({
                message: 'Incorrect password'
            })
            return
        }

        // generate token
        const token = jwt.sign( { userId: userExist._id }, process.env.JWT_SECRET_PASSWORD!)

        res.json({
            message: 'User signed in successfully',
            token
        })
    } catch (error: any) {
        res.status(500).json({
            message: 'Internal server error'
        });
    }
}

export const me = async (req: Request, res: Response) => {
    // @ts-ignore
    const userId = req.userId
    const user = await User.findById(userId)

    if(!user){
        res.json({
            message: "No user found"
        })
        return
    }

    res.json({
        user
    })
}