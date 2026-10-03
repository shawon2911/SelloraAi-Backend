import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import proxy from "express-http-proxy"
dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(morgan("dev"))
app.use("/api/auth", proxy(process.env.AUTH_SERVICE_URL as string))

const PORT = process.env.PORT

app.get("/", (req, res)=> {
    res.json("Hello from sellora AI");
})

app.listen(PORT, ()=>{
    console.log(`Gateway server is running on ${PORT}`)
})