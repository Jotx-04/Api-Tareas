import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoDB = process.env.MONGODB_URL_STRING as string

export default (async() => { //funcion tipo IIFE (funcion auto-invocada)
    try {
        await mongoose.connect(mongoDB)
        console.log("MongoDB Connected...")
    }catch(err){
        console.error(err)
        process.exit(1)
    }
})()