import { Request, Response } from "express";
import { Content } from "../models/content.model";

export const addNewContent = async (req: Request, res: Response) => {
    const { type, link, title } = req.body

    try {
        await Content.create({
            type,
            link,
            title,
            tags: [],
            // @ts-ignore
            userId: req.userId
        })
        res.status(201).json({
            message: "Content added"
        })
    } catch (error: any) {
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        })
    }
}

export const getAllContent = async (req: Request, res: Response) => {
    // @ts-ignore
    const userId = req.userId
    try {
        const content = await Content.find({ userId }).populate('userId', 'username')
        res.json({
            content
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}
export const deleteContent = async (req: Request, res: Response) => {
    // @ts-ignore
    const userId = req.userId
    const contentId  = req.query.contentId

    try {
        // ensures the user who owns the content can delete only
        const content = await Content.deleteMany({ _id: contentId, userId })
        if(!content.deletedCount){
            res.status(403).json({
                message: 'Sorry, you cant delete the content'
            })
            return
        }
    
        res.json({
            message: 'Content deleted'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}