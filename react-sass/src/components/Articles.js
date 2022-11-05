import React from 'react'
import money from '../images/image-currency.jpg';
import resturant from '../images/image-restaurant.jpg';
import sky from '../images/image-plane.jpg';
import suprise from '../images/image-confetti.jpg';
import '../styles/Article.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
function Articles() {
  return (
    <div className='article'>
      <Container>
       <div className='title'>
          <h1>Lastest Articles</h1>
       </div>
       <div className='all-articles'>
         <div className='article-box'>
         <img src={money} alt='img' /><br></br>
          <span>By Claire Robinson</span>
          <h5>Recive money in any currency with no fees</h5>
          <p>The world is getting smaller and we are becoming more mobile. So wyy should you be forced to only recive money in a single...</p>
         </div>
         <div className='article-box'>
         <img src={resturant} alt='img' /><br></br>
          <span>By Claire Robinson</span>
          <h5>Treat yourself without worring about money </h5>
          <p>The world is getting smaller and we are becoming more mobile. So wyy should you be forced to only recive money in a single...</p>
         </div>
         <div className='article-box'>
         <img src={sky} alt='img' /><br></br>
          <span>By Claire Robinson</span>
          <h5>Take your Easybank card wherver you go</h5>
          <p>The world is getting smaller and we are becoming more mobile. So wyy should you be forced to only recive money in a single...</p>
         </div>
         <div className='article-box'>
         <img src={suprise} alt='img' /><br></br>
          <span>By Claire Robinson</span>
          <h5>Our invite-oney Beta accounts are now live!</h5>
          <p>The world is getting smaller and we are becoming more mobile. So wyy should you be forced to only recive money in a single...</p>
         </div>
       </div>
       </Container>
    </div>
  )
}

export default Articles
