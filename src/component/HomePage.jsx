import React from "react";
import Slider from "./Slider";
import PopularToySection from "./PopularToySection";
import TrendingToysSection from "./TrendingToysSection";
import EduToySec from "./EduToySec";

const HomePage = () => {
    return (
        <div className="m-10">
            <Slider></Slider>  
            <PopularToySection></PopularToySection>
            <TrendingToysSection></TrendingToysSection>
            <EduToySec></EduToySec>
        </div>
    );
};

export default HomePage;
