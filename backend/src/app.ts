import express from "express";
import cors from 'cors'

import authRouter from "./routers/auth.router";
import contentRouter from "./routers/content.router";
import brainRouter from "./routers/brain.router";

export const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1', authRouter)
app.use('/api/v1/content', contentRouter)
app.use('/api/v1/brain', brainRouter)

