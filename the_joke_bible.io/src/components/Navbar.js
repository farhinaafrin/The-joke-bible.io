import React from "react";
import shape from "../assets/assets_Homework_Front-End_01/shape.png";
import path from "../assets/assets_Homework_Front-End_01/path_2.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <a href="#">SO FUNKTIONIERT'S</a>

        <a href="#">SONDERANGEBOTE</a>

        <div className="dropdown">
          <button className="dropbtn">
            <img src={shape} alt="" />
            <span>MEIN BEREICH</span>

            <img src={path} alt="" />
          </button>
          <div className="dropdown-content">
            <a href="#">My publised jokes</a>
            <a href="#">My saved jokes</a>
            <a href="#">Acoount information</a>
            <a href="#">Publish new jokes</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
