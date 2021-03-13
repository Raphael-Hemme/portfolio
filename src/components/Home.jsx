import React from "react";

import bigLogo from "../images/own-logo/RH-Logo-05.png";
import TechStack from "./TechStack";

const Home = () => {
  return (
    <section className="home-component">
      <div className="padding-container">
        <h2 className="greeting">Hey, I'm Raphael.</h2>
        <img src={bigLogo} alt="" />
        <h3 className="profession">
          Web Developer & Anthropologist of Technology
        </h3>
        <h4 className="tagline">
          My mind constantly generates out of the box ideas and modern web
          technologies help me build them.
        </h4>
        <h4 className="call-to-action">
          I love to hear about your great ideas and work on them together.
          Please get in touch.
        </h4>
      </div>

      <TechStack />
    </section>
  );
};

export default Home;
