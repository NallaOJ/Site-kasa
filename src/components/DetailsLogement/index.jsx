import './detailsLogement.css'
import { logementsList } from '../../Datas/logements'


function DetailsLogement(logementsList) {

  const { title, description, host, rating, location, equipments, tags } = logementsList

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