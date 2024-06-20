import React from 'react'
import './detailsLogement.css'
import logements from '../../Datas/logement.json'


function DetailsLogement(logements) {

  const { title, description, host, rating, location, equipments, tags } = logements

  return (
<div className='details-logement'>
<div className='info-logement'>
<h2>{title}</h2>
<p>{location}</p>
<div>{tags}</div>
</div>
<div className='hote-rating'>
<p>{host}</p>
<div>{rating}</div>
</div>
<div className='collapse-logement'>
<div>{description}</div>
<div>{description}</div>
</div>
</div>
  )
}

export default DetailsLogement;