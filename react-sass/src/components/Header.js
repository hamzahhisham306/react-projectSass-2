import React from 'react'
import Container from 'react-bootstrap/Container';
import logo from '../images/logo.svg';
import '../styles/Header.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <Container>
        <div className='header'>
            <div className='logo'>
              <img src={logo} alt='img'/>
            </div>
            <ul >
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Bolg</li>
            <li>Carrees</li>
            </ul>
            <button>
                Request Invite
            </button>
        </div>
      
    </Container>
  )
}

export default Header
