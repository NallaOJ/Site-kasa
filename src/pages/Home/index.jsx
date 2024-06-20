import React from 'react';
import BannerImage1 from '../../assets/banner-image1.png';
import Card from '../../components/Card';
import './home.css'
import logementList from '../../Datas/logement.json'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='div-main'>
     <div className='banner-container'><img src={BannerImage1} alt='La maison jungle' className='banner-img1' />
     <p className="banner-text">
        Chez vous, partout et ailleurs</p>
     </div>
     <section className='section-logment'>
     <div className='logement-container'>
      {logementList.map((logement) => (
        <Link to={`/logement/${logement.id}`} key={logement.id}>
      <Card pictures={logement.cover} title={logement.title} />
      </Link>
      ))}
    </div>
    </section>
    </div>
  )
};

export default Home;
