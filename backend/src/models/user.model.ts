import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.pre('save', async function() {
     // Only hash the password if it has been modified (or is new)
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 5)
    }
})

export const User = mongoose.model('User', userSchema)