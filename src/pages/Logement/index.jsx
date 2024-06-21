import React from 'react';
import Slider from '../../components/Slider'
import DetailsLogement from '../../components/DetailsLogement'
import './logement.css'
import { useParams, Navigate } from 'react-router-dom';
import logementList from '../../Datas/logement.json'

function Logement() {
  const { id } = useParams()
  const logement = logementList.find(logement => logement.id === id);

  if (!logement) {
    return <Navigate to='/error/' />
  }

  return (
<main>
    <div className='slider-container'>
    <Slider slides={logement.pictures} />
    <DetailsLogement logement={logement} />
    </div>
    </main>
  )
}

export default Logement;

