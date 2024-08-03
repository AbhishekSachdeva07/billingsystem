import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
//importing files created by us
import connectServer from "./database/Mongoose.js"
import userModel from "./models/UserModel.js"
import signUp from "./Utils/Signup.js"
import checksignup from "./Utils/checksignup.js"
import finallogin from "./Utils/finallogin.js"
import checkToken from "./Utils/checkToken.js"
import Logout from "./Utils/Logout.js"

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'https://billingsystem-one.vercel.app',
    credentials:true
}));

//connect mongoose server
connectServer();
//mongodb schema and model
const usermodel = userModel;

const otpModel = {
    otp: ''
}
//api for basic login and signup
app.post('/sendotp',signUp);
app.post('/signup',checksignup);
app.post('/login',finallogin);
app.get('/check-for-token',checkToken);
app.get('/logout',Logout);

const startServer = async()=>{
    try{
        await app.listen(process.env.PORT,()=>{
            console.log("App is listening at ",process.env.PORT);
        })
    }
    catch(error){
        console.log("Error occured in starting server ",error);
    }
}
startServer();
