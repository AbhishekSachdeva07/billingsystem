import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();

const generatejwttoken = async (userdata)=>{
    const token = await jsonwebtoken.sign({
        id: userdata._id,
        email: userdata.email,
        models: userdata.models
    },process.env.SECRET,{expiresIn:'5h'});

    const options = {
        expires: new Date(Date.now() + 5*24*60*60*1000),
        httpOnly: true,
        sameSite: 'Lax',
        secure: false
        // domain: process.env.DOMAIN
    };

    const tokendata  = {token,options};

    return tokendata;
}

export default generatejwttoken;
