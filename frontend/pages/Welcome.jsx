import React from "react";
import Navbar from "../elements/Navbar";
import Displayoptions from "../elements/Displayoptions";
import { useLocation } from "react-router-dom";

const Welcome = ()=>{
    const location = useLocation();
    const userData = location.state;

    return(
        <>
            <Navbar data={userData}/>
            <Displayoptions data={userData}/>
        </>
    )
}

export default Welcome;