import React from "react";
import Navbar from "../components/Navbar";
import ProjectHeroImg  from "../components/HeroImg2";
import Footer from "../components/Footer";

const Project = () => {
    return(
        <div>
            <Navbar />
            <HeroImg2 heading={"Projects"} paragraph={"This place contain heading paragraph."}/>
            <Footer />
        </div>
    )
}

export default Project;