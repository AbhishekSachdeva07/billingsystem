import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Displayoptions = (props) => {
    const navigate = useNavigate();
    const [totalgridnumber, setTotalgridnumber] = useState(0);
    const userData = props.data;

    useEffect(() => {
        let gridNumber = 0;
        if (props.data.models.billingsystem) {
            gridNumber++;
        }
        if (props.data.models.expensetracker) {
            gridNumber++;
        }
        setTotalgridnumber(gridNumber);
    }, [props.data.models]);
    console.log(userData);

    const doOnclick = (e)=>{
        const key = e.target.id;
        if(key==="billingsystem")
        {
            navigate(`/billingsystem/${encodeURIComponent(userData.email)}`,{state:userData})
        }
        else if(key==="expensetracker")
        {
            navigate(`/expensetracker/${encodeURIComponent(userData.email)}`,{state:userData});
        }
    }

    return (
        <div className="maingrid-display" style={{gridTemplateColumns: `repeat(${totalgridnumber}, 1fr)`,width:totalgridnumber==1?'40%':'60%'}}>
            {Object.keys(props.data.models).map((key, index) => (
                props.data.models[key] && (
                    <div key={index} className="display-objects" style={{width:totalgridnumber==1?'50%':'100%'}} id={key} onClick={doOnclick}>
                        <span>{key}</span>
                    </div>
                )
            ))}
        </div>
    );
}

export default Displayoptions;
