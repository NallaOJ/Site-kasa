import React from 'react';
import { logementsList } from '../../Datas/logements';
import Card from '../Card'
import './cardlist.css'

function CardList() {
  const categories = logementsList.reduce(
    (acc, logement) => 
      acc.includes(logement.category) ? acc : acc.concat(logement.category), []
  );

  return (
    <div className='container-list'>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="logements-list">
        {logementsList.map(({ id, cover, title }) => (
          <Card 
             key={id}
              cover={cover}
              title={title}
          />
        ))}
      </ul>
    </div>
  );
}

export default CardList;
