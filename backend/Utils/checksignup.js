import otpstore from "./Otpstore.js";
import response from "../Response/response.js";
import mongoose from "mongoose";
import userModel from "../models/UserModel.js";
import cookieParser from "cookie-parser";
import jsonwebtoken from "jsonwebtoken";
import generatejwttoken from "./generatejwttoken.js";

const checksignup = async (req,res)=>{
    const data = req.body;
    if(data.email == otpstore.email && data.otp == otpstore.otp)
    {
        response.otpverified = true;
        //now checkfor exisiting user
        try{
            const checkUser = await userModel.findOne({email:data.email});
            if(checkUser!=null)
            {
                response.existinguser = true;
                //generate new token for the existing user and pass to cookies
                const tokendata = await generatejwttoken(checkUser);
                response.tokencreated = true;
                res.cookie("_token_cookie",tokendata.token,tokendata.options);
                response.cookiesset = true;
                response.token = tokendata.token;
                res.status(200).json(response);
            }
            else
            {
                //create new user in next page give response otp verified and not existing user
                response.existinguser = false;
                res.status(200).json(response);
            }
        }
        catch(error)
        {
            console.log("Error occured at checking user at signup",error);
        }
    }
    else{
        response.otpverified = false;
        res.status(200).json(response);
    }
}

export default checksignup;