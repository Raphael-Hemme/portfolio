import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

// React-Bootstrap imports:
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import of bootstrap stylesheet
import "bootstrap/dist/css/bootstrap.min.css";

// Import own components
import TopNavigation from "./components/TopNavigation.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  let [displaySplashScreen, setDisplaySplashScreen] = useState(true);
  let [isScrolled, setIsScrolled] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset);
      isScrolled >= 50
        ? setDisplaySplashScreen(false)
        : setDisplaySplashScreen(true);
    };
  }, [isScrolled, displaySplashScreen]);

  return (
    <div className="App">
      {/* The following two divs are just for the background image */}
      <div className="colorGradient">
        <div className="dotOverlay">
          <TopNavigation
            topNavHeight={displaySplashScreen ? "top-nav-big" : "top-nav-small"}
          />

          <Container fluid="true" className="m-0 pt-5">
            <Row className="m-0 p-0 justify-content-center">
              <Col xs={12} lg={10} className="justify-content-center pt-5">
                <Switch>
                  <Route path="/projects">
                    <Projects />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </Col>
            </Row>
            <Footer />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
