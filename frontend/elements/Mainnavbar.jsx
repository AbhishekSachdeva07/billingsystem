import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const Mainnavbar = ()=>{
    const navigate = useNavigate();
    const location = useLocation();
    const [loginpage,setloginpage] = useState(false);
    useEffect(()=>{
        const navbardisplay = ()=>{
            setloginpage(true);
        }
        if(['/login','/signup'].includes(location.pathname))
        {
            navbardisplay();
        }
    },[location.pathname,navigate])
    return(
        <>
            <div className="main-navbar">
                <div className={loginpage?'left-navbar-hidden':'left-navbar'}>
                    <Link to='/'><img src="https://res.cloudinary.com/dxbfhdvv7/image/upload/v1722666084/360_F_539638813_CcdRx5ZDVR5pkEB35iDn7qVxtNCiRrRN_z3p6tq.jpg" alt="" /></Link>
                </div>
                <div className={loginpage?'right-navbar-hidden':'right-navbar'}>
                    <Link>About Us</Link>
                    <Link>Services</Link>
                    <Link>Pricing</Link>
                    <Link>Contact Us</Link>
                    <Link to='/login' id="loginsignupbtn">Login/Signup</Link>
                </div>
            </div>
        </>
    )
}

export default Mainnavbar;