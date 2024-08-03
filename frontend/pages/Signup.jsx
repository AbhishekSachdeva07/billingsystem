import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import Mainnavbar from "../elements/Mainnavbar";

const Signup = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const userdata = location.state;
    const [userData, setUserData] = useState(userdata);
    const [errorcuming,seterror] = useState(false);

    useEffect(() => {
        if (userdata == null) {
            navigate('/login');
        }
        console.log(userData);
    }, []);

    const handleChange = (e) => {
        setUserData((oldData) => ({
            ...oldData,
            models: {
                ...oldData.models,
                [e.target.name]:e.target.checked
            }
        }));
    };

    const addusertodatabase = async (e)=>{
        e.preventDefault();
        try{
            if(userData.models.billingsystem==true || userData.models.expensetracker==true)
            {
                const response = await axios.post("https://billingsystem-hi90.onrender.com/login",userData, {
                    withCredentials: true
                });
                console.log(response.data);
                if(response.data.cookiesset && response.data.newuseradded)
                {
                    navigate('/welcome',{state:userData});
                }
                else{
                    alert("Some error occured");
                    navigate('/');
                }
            }
            else{
                seterror(true);
            }
        }
        catch(error)
        {
            alert("Some error occured try again after some time");
            return;
        }
    }

    return (
        <>
            <Mainnavbar />
            <div className="mainbox-login">
                <div className="loginform">
                    <br />
                    <b>Signup</b>
                            <form onSubmit={addusertodatabase}>
                                <input type="email" value={userData.email} readOnly /><br />
                                <div style={{textAlign:'left',marginLeft:'7%',marginTop:'7px'}}>
                                    <p style={{marginBottom:'7px',color:'gray'}}>Select services:</p>
                                    <label>
                                        <input type="checkbox" name="billingsystem" checked={userData.models.billingsystem}onChange={handleChange} />
                                        Billing System</label>
                                        <br />
                                    <label>
                                        <input type="checkbox" name="expensetracker" checked={userData.models.expensetracker} onChange={handleChange}/>
                                        Expense Tracker</label><br /><br />
                                        <span style={{fontSize:'12px',color:'red',display:errorcuming?'block':'none'}}>Select atleast one Service to continue further.</span>
                                    </div>
                        <button type="submit" id="btn">Continue</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;
