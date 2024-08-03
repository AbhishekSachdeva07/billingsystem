import response from "../Response/response.js";

const Logout = async(req,res)=>{
    try{
        res.clearCookie('_token_cookie',{
            httpOnly:true,
            secure:false,
            sameSite:'Lax'
        })
        response.cookiesset = false;
        response.userData = {};
    }
    catch(error)
    {
        response.failedlogout = true;
        console.log("Error occured while logging out user",error);
    }
    res.status(200).json(response);
}

export default Logout;