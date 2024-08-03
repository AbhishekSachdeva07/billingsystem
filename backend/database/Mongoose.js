import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const connectServer = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected");
    }
    catch(error){
        console.log("Error occured connecting database ",error);
    }
}

export default connectServer;
