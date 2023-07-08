import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import Work from "../components/Work";
import PricingCard from "../components/PricingCard";


const Home = () => {
    return (
        <div>
            <Navbar/>
            <HeroImg/>
            <Work/>
            <PricingCard/>
            <Footer/>
        </div>
    );
}

export default Home;