import mongoose from 'mongoose';
import {ENV} from './env.js'

export const connectDB = async()=>{
    try {
        if(!ENV.DB_URL){
            throw new Error("DB_URL is not defined in env")
        }
        const conn = await mongoose.connect(ENV.DB_URL)
        console.log("Database Connected",conn.connection.host)
    } catch (error) {
        console.error("Database connection failed",error)
        process.exit(1);
    }
}