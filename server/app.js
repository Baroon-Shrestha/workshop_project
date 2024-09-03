import express from "express"
import dotenv from "dotenv"
import { dbconnection } from "./database/database.js"
import testRoutes from "./routes/testRoutes.js"
import postRoutes from "./routes/postRoutes.js"

const app = express()

dotenv.config()

app.use(express.json())

app.use("/workshop", testRoutes)
app.use("/workshop", postRoutes)


dbconnection()

export default app