import express from "express"
import dotenv from "dotenv"
import { dbconnection } from "./database/database.js"
import testRoutes from "./routes/testRoutes.js"

const app = express()

dotenv.config()

app.use("/workshop", testRoutes)




dbconnection()

export default app