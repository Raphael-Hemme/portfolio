import React from "react";

import logo from "../images/own-logo/RH-logo.png";
import logoNegativeNight from "../images/own-logo/RH-Logo-05-negative-small-night.png";
import logoNegativeDay from "../images/own-logo/RH-Logo-05-negative-small-day.png";

const Logo = ({ size }) => {
  return (
    <span className={`${size}`}>
      <div className={`logo-bg-rotating-gradient`}> </div>
      <img src={logoNegativeDay} alt="" className="logoNegative" />
    </span>
  );
};

export default Logo;
