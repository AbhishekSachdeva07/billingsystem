import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props)=>{
    const email = props.data.email;
    console.log(email);
    return(
        <>
            <div className="main-navbar">
                <div className="left-navbar">
                    <span>hlo</span>
                    <Link to={`/welcome`}>Home page</Link>
                </div>
                <div className="right-navbar">
                    <span>{email}</span>
                    <Link to='/logout'>Logout</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;