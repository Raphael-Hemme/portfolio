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

      <Container>
        <Row>
          <Col xs={12}>
            th
          </Col>
        </Row>
        <Row>
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
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>
      
      <Footer />
    </div>
  );
}

export default App;
