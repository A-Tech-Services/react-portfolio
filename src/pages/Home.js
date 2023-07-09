import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import Work from "../components/Work";
import PricingCard from "../components/PricingCard";
import AboutContent from "../components/AboutContent";


const Home = () => {
    return (
        <div>
            <Navbar/>
            <HeroImg/>
            <AboutContent/>
            <Work/>
            <PricingCard/>
            <Footer/>
        </div>
    );
}

export default Home;