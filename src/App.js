import logo from "./logo.svg";
import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

// React-Bootstrap imports:
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import of bootstrap stylesheet
import "bootstrap/dist/css/bootstrap.min.css";

// Import own components
import SplashScreen from "./components/SplashScreen";
import TopNavigation from "./components/TopNavigation";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

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
          {displaySplashScreen ? (
            <SplashScreen />
          ) : (
            <>
              <TopNavigation />

              <Container fluid="true" className="m-0 p-5">
                <Row className="m-0 p-0 justify-content-center">
                  <Col xs={12} lg={10} className="justify-content-center">
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
              </Container>

              <Footer />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
