import mongoose from "mongoose";
import generateotp from "./Generateotp.js";
import sendEmail from "./Sendemail.js";
import otpstore from "./Otpstore.js";
import response from "../Response/response.js";

const signUp = (req,res)=>{
    const reqdata = req.body;
    const otp = generateotp();
    otpstore.email = reqdata.email;
    otpstore.otp = otp;
    sendEmail(reqdata.email,otp);
    // otpmodel.otp = otp;
    response.otpsent = true;
    res.status(200).json(response);
}

export default signUp;