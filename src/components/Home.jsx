import React from "react";

import bigLogo from "../images/own-logo/RH-Logo-05.png";

const Home = () => {
  return (
    <section className="home-component">
      <h2 className="greeting">Hey, I'm Raphael.</h2>
      <h3 className="profession">
        Web Developer & Anthropologist of Technology
      </h3>
      <img src={bigLogo} alt="" />
      <h4 className="tagline">
        My mind constantly generates out of the box ideas and modern web
        technologies help me build them.
      </h4>
      <h4 className="call-to-action">
        I love to hear about your great ideas and work on them together. Please
        get in touch.
      </h4>
      <p></p>
    </section>
  );
};

export default Home;
