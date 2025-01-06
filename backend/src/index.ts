import 'dotenv/config'
import { app } from "./app";
import { connectToDatabase } from './db/db';

const startServer = async () => {
    try {
        await connectToDatabase()
        console.log('DB is connected successfully...')

        app.listen(3000, () => {
            console.log('server is running...')
        })
    } catch (error) {
        console.log('Error while running the server: ', error)
    }
}

startServer()