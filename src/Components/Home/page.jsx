import React from "react";
import BackgroundDesign from "./HomeBackground/HomeBackground.module.css"; // Ensure correct import path
import FirstDateSelect from "../FirstDateSelect/page";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <div className="">
        <div className={BackgroundDesign.first_div}></div>
        <div className={BackgroundDesign.second_div}></div>
        <div className="relative mt-20">
          <div>
            <FirstDateSelect />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
