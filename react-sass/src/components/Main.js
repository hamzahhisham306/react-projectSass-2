import React from 'react'
import phone from '../images/image-mockups.png';
import '../styles/Main.scss';

function Main() {
  return (
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
  )
}

export default Main;
