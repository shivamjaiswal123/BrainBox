import mongoose from "mongoose"

const linkSchema = new mongoose.Schema({
    hash: {
        type: String,
        required: true
    },
    userId: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'User',
    }
})

export const Link = mongoose.model('Link', linkSchema)