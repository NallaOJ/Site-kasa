import React from 'react';
import BannerImage1 from '../../assets/banner-image1.png';
import Card from '../../components/Card';
import './home.scss'
import logementList from '../../Datas/logement.json'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className='div-main'>
     <div className='banner-container'><img src={BannerImage1} alt='' className='banner-img1' />
     <p className="banner-text">
        Chez vous, partout et ailleurs</p>
     </div>
     <section className='section-logment'>
      <ul className='logement-list'>
      {logementList.map((logement) => (
        <li className='logement-home'  key={logement.id} >
          <Link to={`/logement/${logement.id}`}>
      <Card pictures={logement.cover} title={logement.title} />
      </Link>
      </li>
      ))}
      </ul>
    </section>
    </main>
  )
};

export default Home;
