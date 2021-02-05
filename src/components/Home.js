import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import logoNegative from '../images/own-logo/RH-Logo-05_negative.png'

const Home = () => {
    return (
        <Jumbotron className="mt-2">
            <div className="dark-jumbotron">
                <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <div className="spinnerContainer">
                <div className="logoRotatingColorGradient"> </div>
                <img src={logoNegative} alt="" className="logoNegative"/>
            </div>
        
            
            
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
            </div>
            
        </Jumbotron>
    )
}

export default Home;

