import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// React-Bootstrap imports:
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Import of bootstrap stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';

// Import own components
import TopNavigation from './components/TopNavigation';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">



      <TopNavigation />

      <Container fluid className="colorGradient">

          <Row className="m-0 p-0">
            <Col xs={12} lg={10}>

            </Col>
          </Row>
          <Row className="dotOverlay">
            <Col sm>
              <Switch>
                <Route path='/projects'>
                  <Projects />
                </Route>
                <Route path='/'>
                  <Home />
                </Route>
              </Switch>
            </Col>
          </Row>
          <Row className="m-0">
            <Col xs={12} lg={10}>

            </Col>
          </Row>

      </Container>

      <Footer />

    </div>
  );
}

export default App;
