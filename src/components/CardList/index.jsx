import React from 'react';
import logements from '../../Datas/logement.json';
import Card from '../../components/Card'
import './cardlist.scss'


function CardList() {
  const categories = logements.reduce(
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
        {logements.map(({ id, cover, title }) => (
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
