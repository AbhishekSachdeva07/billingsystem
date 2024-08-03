import mongoose from "mongoose";

const Usermodel = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    models:{
        billingsystem:{
            type: Boolean,
            default: false
        },
        expensetracker:{
            type: Boolean,
            default: false
        }
    }
},{timestamps:true})

const userModel = mongoose.model("UserData",Usermodel);

export default userModel;