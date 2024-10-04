import mongoose  from "mongoose";
import express from "express";
import {DB_Name} from './constant.js';
import connectDB from "./db/index.js";
import dotenv from 'dotenv'

dotenv.config({
    path:'./.env'
})
connectDB();


/*
const app=express();
(async ()=>{
    try {
       mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
       app.on("error",(error)=>{
        console.log('Errr:',error)
       }) 
       app.listen(process.env.PORT,()=>{
        console.log(`App is listing on port${procees.env.PORT}`);
       })
    } catch (error) {
        console.error('Error',error)
        throw error
    }
})()
*/