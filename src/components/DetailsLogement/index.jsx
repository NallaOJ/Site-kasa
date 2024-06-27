import React from 'react'
import './detailsLogement.scss'
import Collapse from '../Collapse'
import starActive from '../../assets/starActive.png'
import starInactive from '../../assets/starInactive.png'


function DetailsLogement({ logement }) {

  const { title, location, tags, host, rating, description, equipments } = logement

  const generateStars = (rating) => {
    const totalStars = 5;
    return Array.from({ length: totalStars }, (v, i) => (
      <img 
        key={i} 
        src={i < rating ? starActive : starInactive} 
        alt={i < rating ? 'Active Star' : 'Inactive Star'} 
        className='star-icon'
        width="25" 
      height="24" 
      />
    ));
  };

  return (
<div className='logement'>
<div className='details-logement'>

<div className='info-logement'>
  <h2 className='title'>{title}</h2>
   <p className='location'>{location}</p>
    <div className='tags-container'>
       <ul className="tags-list">
          {tags.map((tag, index) => (
           <li className="tags" key={index}>
             {tag}
           </li>
              ))}
        </ul>
    </div>
</div>

<div className='host-and-rating'>
  <div className='host'>
  <p className='host-name'>{host.name}</p>
  <img src={host.picture} alt={host.name} className='host-picture' />
  </div>
  <div className='rating'> {generateStars(rating)}</div>
</div>
</div>

<div className='collapse-logement-container'>
<div className='collapse-logement'>
<Collapse title="Description" content={description} />
<Collapse title="Equipments" content={equipments} isList  />
</div>
</div>


</div>
  )
};

export default DetailsLogement;