import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import userModel from "../models/UserModel.js";
import response from "../Response/response.js";
import generatejwttoken from "./generatejwttoken.js"
import sendWelcomemail from "./SendWelcomemail.js";

const finallogin = async(req,res)=>{
    const userdata = req.body;
    try{
        const newuserdata = new userModel(userdata);
        await newuserdata.save();
        response.newuseradded = true;
        const tokendata = await generatejwttoken(userdata);
        res.cookie("_token_cookie",tokendata.token,tokendata.options);
        response.tokencreated = true;
        response.token = tokendata.token;
        response.cookiesset = true;
        sendWelcomemail(userdata.email);
        res.status(200).json(response);
    }
    catch(error)
    {
        console.log("Error occured in finallogin ",error);
        response.existinguser = true;
        res.status(200).json(response);
    }
}

export default finallogin;