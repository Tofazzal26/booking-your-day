import React from "react";
import BackgroundDesign from "./HomeBackground/HomeBackground.module.css"; // Ensure correct import path

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <div className="">
        <div className={BackgroundDesign.first_div}></div>
        <div className={BackgroundDesign.second_div}></div>
        <div className="relative mt-20">
          <div>
            <h1 className="">Welcome to dashboard</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque dolore veniam similique, incidunt voluptatibus tempore!
              Atque eos similique consectetur quidem!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
