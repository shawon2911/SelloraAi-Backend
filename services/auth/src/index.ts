import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { connectDb } from "./config/db.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser())



const PORT = process.env.PORT

app.get("/", (req, res)=> {
    res.json("Hello from sellora AI Auth-Service");
})


app.listen(PORT, ()=>{
    console.log(`Auth server is running on ${PORT}`)
    connectDb();
})