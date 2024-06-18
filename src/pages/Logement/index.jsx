import React from 'react';
import Slider from '../../components/Slider';
import './logement.css'
import DetailsLogement from '../../components/DetailsLogement';

function Logement() {

  return (
    <div className='container-logement'>
    <Slider />
    <DetailsLogement />
    </div>
  )
}

export default Logement;

