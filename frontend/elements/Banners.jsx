import React from "react";

const Banner = (props)=>{
    return(
        <>
            <div className="info-banner">
                <span>{props.data.txt.split("24X7")[0]}</span>&nbsp;
                <span style={{
                    color:'orange'
                }}> 24X7 </span>&nbsp;
                <span>{props.data.txt.split("24X7")[1]}</span>
            </div>
        </>
    )
}

export default Banner;