import mongoose from "mongoose";

//connect to the database
export const connectToDatabase = async () => {
    try {
        // if(!process.env.MONGODB_URL){
        //     console.log('Something wrong with db url')
        //     return
        // }

        await mongoose.connect(process.env.MONGODB_URL!)
    } catch (error) {
        console.log('Something went wrong when connecting to DB: ', error)
        throw error
    }
}