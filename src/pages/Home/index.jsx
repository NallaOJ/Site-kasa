import React from 'react';
import BannerImage1 from '../../assets/banner-image1.png';
import CardList from '../../components/CardList';
import './home.css'

const Home = () => {
  return (
    <div className='div-main'>
     <div className='banner-container'><img src={BannerImage1} alt='La maison jungle' className='banner-img1' />
     <p className="banner-text">
        Chez vous, partout et ailleurs</p>
     </div>
    <CardList />
    </div>
  )
};

export default Home;
