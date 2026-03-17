import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({
    path:"./env"
})
connectDB()
.then(()=>{
    app.on("Error",(err)=>{
        console.log("Server error", err);
        
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`⚙ Server is running at Port: ${process.env.PORT || 8000}`);
        
    })
})
.catch((err)=>{
    console.log('MONGO db connection failed !!!', err);
    
})





/*
import express from "express";

const app = express()

(async() => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("Error",(error)=>{
            console.log("Error", error);
            throw error            
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("Error: ", error)
        throw error
    }
})()*/