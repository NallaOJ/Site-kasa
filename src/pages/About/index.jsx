import React from 'react';
import BannerImage2 from '../../assets/banner-image2.png';
import Collapse from '../../components/Collapse'
import './about.css'


const About = () => {
  return (
  <div className='div-container-about'>
    <img src={ BannerImage2 } alt='Banner immage home' className='banner-img2' />
    <Collapse />
      </div>
)
};

export default About;
