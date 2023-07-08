import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2  from "../components/HeroImg2";
import Footer from "../components/Footer";
import PricingCard from "../components/PricingCard";

const Project = () => {
    return(
        <div>
            <Navbar />
            <HeroImg2 heading={"PROJECTS."} paragraph={"Some of my most recent works."}/>
            <PricingCard/>
            <Footer />
        </div>
    )
}

export default Project;