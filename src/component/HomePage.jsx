import React from "react";
import Slider from "./Slider";
import PopularToySection from "./PopularToySection";

const HomePage = () => {
    return (
        <div className="m-10">
            <Slider></Slider>  
            <PopularToySection></PopularToySection>
        </div>
    );
};

export default HomePage;
