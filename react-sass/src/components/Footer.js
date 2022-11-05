import React from 'react'
import logo from '../images/logo.svg';
import facebook from '../images/icon-facebook.svg';
import instgram from '../images/icon-instagram.svg';
import youtube from '../images/icon-youtube.svg';
import pie from '../images/icon-pinterest.svg';
import '../styles/Footer.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <div className='footer'>
        <Container>
        <div className='footer-flex'>
      <div className='social'>
          <div className='logo'>
             <img src={logo} alt='img' style={{color:'white', backgroundColor:'white', padding:'10px'}}/>
          </div>
          <ul>
            <li>
                <img src={facebook} alt='facebook'/>
            </li>
            <li>
                <img src={instgram} alt='facebook'/>
            </li>
            <li>
                <img src={youtube} alt='facebook'/>
            </li>
            <li>
                <img src={pie} alt='facebook'/>
            </li>
          </ul>
      </div>
      <div className='contact'>
      <ul>
      <li>About Us</li>
      <li>Contact</li>
      <li>Blog</li>
      </ul>
      <ul>
      <li>Careers</li>
      <li>Support</li>
      <li>Privacy Policy</li>
      </ul>
      </div>
      <div className='request'>
      <button>
                Request Invite
      </button>
      <h3>Easybank All Rights Reserved</h3>
      </div>
      </div>
      </Container>
    </div>
  )
}

export default Footer
