import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";

import authRouter from "./routers/auth.router";
import contentRouter from "./routers/content.router";
import brainRouter from "./routers/brain.router";

export const app = express()

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))
app.use(cookieParser())

app.use('/api/v1', authRouter)
app.use('/api/v1/content', contentRouter)
app.use('/api/v1/brain', brainRouter)

