import React from "react";

const Bannernormal = (props)=>{
    return(
        <>
            <div className="info-banner">
                <span>{props.data.txt.split("9872654640")[0]}</span>&nbsp;
                <span style={{color:'orange'}}>98726-54640</span>
            </div>
        </>
    )
}

export default Bannernormal;