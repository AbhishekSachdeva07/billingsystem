import React from "react";
import Mainnavbar from "../elements/Mainnavbar";
import HomepageBanner from "../elements/Homepagebanner";
import Footer from "../elements/Footer";
import Features from "../elements/Features";
import Banner from "../elements/Banners";
import Showcase from "../elements/Showcase";
import Bannernormal from "../elements/Bannernormal";
const Home = ()=>{
    const bannerdata = {
        txt: "Working 24X7 to provide seamless experience.",
    }
    const bannerdata2 = {
        txt: "For any queries contact 9872654640"
    }
    return(
        <>
            <Mainnavbar />
            <HomepageBanner />
            <Features />
            <Banner data={bannerdata}/>
            <Showcase/>
            <Bannernormal data={bannerdata2}/>
            <Footer />
        </>
    )
}

export default Home;