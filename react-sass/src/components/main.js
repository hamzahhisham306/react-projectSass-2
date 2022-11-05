import React from 'react'
import phone from '../images/image-mockups.png';
import '../styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
function Main() {
  return (
    <Container>

    <div className='main-class'>
      <div className='text'>
        <h1>Next generation
            Digital banking
        </h1>
        <p>take your financial life online. Your Easybank account will be a one-stop shop for spending saving budgeting investing and much more.</p>
        <button>Request invite</button>
      </div>
      <div className='phone'>
        <img src={phone} alt='phone'/>
      </div>
    </div>
    </Container>

  )
}

export default Main;
