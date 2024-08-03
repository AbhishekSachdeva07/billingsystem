import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../elements/Navbar";

const ExpenseTracker = ()=>{
    const location = useLocation();
    const userData = location.state;
    return(
        <>
            <Navbar data={userData}/>            
            <span>expense tracker</span>
        </>
    )
}

export default ExpenseTracker;