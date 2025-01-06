import mongoose from "mongoose";

const ContentType = ['image', 'video', 'article', 'audio']

const contentSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ContentType,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tags'
    }],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
})

export const Content = mongoose.model('Content', contentSchema)