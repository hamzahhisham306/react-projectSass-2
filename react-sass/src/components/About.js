import React from 'react';
import cash from '../images/icon-online.svg';
import api from '../images/icon-api.svg';
import onboarding from '../images/icon-onboarding.svg';
import budge from '../images/icon-budgeting.svg';
import '../styles/About.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
function About() {
  return (
    <div className='about'>
      <Container>
      <div className='about-bank'>
        <h1>Why choose Easybank?</h1>
        <p>We leverage Open Banking to turn you bank account into your financial hub Control your finanes like never before</p>
      </div>
      <div className='aboutUS'>
        <div className='box'>
          <img src={cash} alt='img'/>
          <h4>Simple Budgeting </h4>
          <p>
            Our modern web and mobile applications allow you to keep tracj of your finances wherver you are in the world
          </p>
        </div>
        <div className='box'>
          <img src={budge} alt='img'/>
          <h4>Fast Onboarding</h4>
          <p>
            Our modern web and mobile applications allow you to keep tracj of your finances wherver you are in the world
          </p>
        </div>
        <div className='box'>
          <img src={onboarding} alt='img'/>
          <h4>Open API</h4>
          <p>
            Our modern web and mobile applications allow you to keep tracj of your finances wherver you are in the world
          </p>
        </div>
        <div className='box'>
          <img src={api} alt='img'/>
          <h4>Online Banking</h4>
          <p>
            Our modern web and mobile applications allow you to keep tracj of your finances wherver you are in the world
          </p>
        </div>
      </div>
      </Container>
    </div>
  )
}

export default About
