import React from "react";

const Features = ()=>{
    const featuresdata = [
        {
            logo: 'https://res.cloudinary.com/dxbfhdvv7/image/upload/v1722079041/box-arrow-in-right_c42mgo.svg',
            headline: 'Easy Login/Signup',
            desc: 'Experience a seamless and user-friendly login and signup process that gets you started quickly and effortlessly, ensuring you spend more time exploring and less time registering.'
        },
        {
            logo: 'https://res.cloudinary.com/dxbfhdvv7/image/upload/v1722668958/journal-check_majz34.svg',
            headline: 'Easy Data tracking',
            desc: 'Track your data effortlessly with intuitive tools that provide real-time updates and insights, making data management straightforward and efficient for all users.'
        },
        {
            logo: 'https://res.cloudinary.com/dxbfhdvv7/image/upload/v1722672201/bar-chart_zeetue.svg',
            headline: 'Interactive Data Visulization',
            desc: 'Engage with your data like never before through interactive visualizations that allow you to explore trends, patterns, and insights with ease and clarity.'
        },
        {
            logo: 'https://res.cloudinary.com/dxbfhdvv7/image/upload/v1722672324/receipt_q2wgjk.svg',
            headline: 'Advanced Billing System',
            desc: 'Streamline your financial processes with our advanced billing system, designed to handle complex transactions, automate invoicing, and ensure accuracy.'
        }
    ]
    return(
        <>
            <div className="features">
                <div className="gridfeatures">
                    {featuresdata.map((data,index)=>(
                        <div className="featuresgriddata">
                            <div className="logo"><img src={data.logo} alt="" /></div>
                            <div className="mainheading">{data.headline}</div>
                            <div className="description">{data.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Features;