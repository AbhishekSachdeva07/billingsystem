import React from "react";
const Showcase = ()=>{
    const showcasedata = [
        {
            headline: 'Expense Tracker',
            desciption: 'An expense tracker offers numerous advantages for managing personal and business finances. It provides a clear overview of spending patterns, helping users identify unnecessary expenditures and areas for potential savings. By categorizing expenses, it simplifies budgeting and financial planning, ensuring that funds are allocated effectively. An expense tracker also promotes financial discipline and awareness, reducing the likelihood of overspending. Additionally, it facilitates better record-keeping and simplifies tax preparation by maintaining organized and accessible financial data.',
            video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/v6bx9g-mqyo?si=vOyacvc1ukOvzIyN&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
        }
    ]
    return(
        <>
            <div className="showcase-data">
                <div className="mainshowcase">
                   <div className="showcase-first">
                    <span><b>{showcasedata[0].headline}</b></span><br /><br />
                    <p style={{textAlign:'justify'}}>{showcasedata[0].desciption}</p>
                   </div>
                   <div className="showcase-second">
                        <video width="80%" height="240" controls autoPlay muted playsInline>
                            <source src="https://res.cloudinary.com/dxbfhdvv7/video/upload/v1722674806/Y2meta.app-Tracking_Business_Expenses__7_Steps_for_Success-_1080p_hh15ce.mp4" type="video/mp4"/>
                        </video>
                   </div>
                </div>
            </div>
        </>
    )
}

export default Showcase;