import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ()=>{
    const navigate = useNavigate();
    useEffect(()=>{
        const logout = async()=>{
            try{
                await axios.get('http://localhost:5000/logout',{withCredentials:true});
                navigate('/');
            }
            catch(error)
            {
                alert("Some error occured try again after some time");
            }
        }
        logout();
    },[navigate]);
    return(
        <>
            <span>Logging Out... </span>
        </>
    )
}

export default Logout;