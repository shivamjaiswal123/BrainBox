import { Request, Response } from "express";
import { randomString } from "../utils";
import { Link } from "../models/link.model";
import { Content } from "../models/content.model";
import { User } from "../models/user.model";

export const createShareableLink = async (req: Request, res: Response) => {
    const { share } = req.body
    // @ts-ignore
    const userId = req.userId
    try {
        if(share){
            // if any hash already exist then return that only
            const hashExist = await Link.findOne({ userId })
            if(hashExist){
                res.json({
                    message: "You are sharing your brain box",
                    hash: hashExist.hash
                })
                return
            }
            const hash = randomString(10)
            await Link.create({
                hash,
                userId
            })
            res.json({
                message: "Sharing enabled",
                hash
            })
        }else{
            // delete the link entry
            await Link.deleteOne({ userId })
    
            res.json({
                message: "Sharing disabled"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}

export const getBrain = async (req: Request, res: Response) => {
    const hash = req.params.shareLink
    try {
        const brainExist = await Link.findOne({ hash })
    
        if(!brainExist){
            res.status(403).json({
                message: 'No access to brain'
            })
            return
        }

        const user = await User.findById(brainExist.userId)
    
        const brain = await Content.find({ userId: brainExist?.userId })
        res.json({
            username: user?.username,
            brain
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}

export const sharingStatus = async (req: Request, res: Response) => {
    // @ts-ignore
    const userId = req.userId
    try {
        const isSharing = await Link.findOne({ userId })
        if(!isSharing){
            res.json({
                sharing: false
            })
            return
        }

        res.json({
            sharing: true
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}