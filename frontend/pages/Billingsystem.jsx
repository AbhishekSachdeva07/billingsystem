import React from "react";
import Navbar from "../elements/Navbar";
import { useLocation } from "react-router-dom";

const Billingsystem = ()=>{
    const location = useLocation();
    const userData = location.state;
    return(
        <>
            <Navbar data={userData}/>
            <span>billing system</span>
        </>
    )
}

export default Billingsystem;