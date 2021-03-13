import React from "react";

import logoNegativeNight from "../images/own-logo/RH-Logo-05-negative-small-night.png";
import logoNegativeDay from "../images/own-logo/RH-Logo-05-negative-small-day.png";

const Logo = ({ size }) => {
  return (
    <span className={`d-inline-block align-middle logo-container-${size}`}>
      <div className={`logo-bg-rotating-gradient-${size}`}> </div>
      <img src={logoNegativeDay} alt="" className={`logoNegative-${size}`} />
    </span>
  );
};

export default Logo;
