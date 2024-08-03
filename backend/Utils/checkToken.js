import cookieParser from "cookie-parser";
import jsonwebtoken from "jsonwebtoken"
import response from "../Response/response.js";

const checkToken = async(req,res)=>{
    const cookies = req.cookies._token_cookie;
    //checking cookie and getting data from it
    if(cookies)
    {
        try{
            //get data from cookies
            const verifytoken = await jsonwebtoken.verify(cookies,process.env.SECRET);
            response.cookiesset = true;
            response.userData = verifytoken;
        }
        catch(error)
        {
            response.cookiesset = false;
            response.jwtexpired = true;
            res.clearCookie('_token_cookie',{
                httpOnly:true,
                sameSite: 'Lax',
                secure:false
            })
            console.log("error at checking token",error);
        }
    }
    else{
        response.cookiesset = false;
    }
    return res.status(200).json(response);
}

export default checkToken;