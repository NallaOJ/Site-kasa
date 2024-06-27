import React, { useState } from 'react';
import collapseup from '../../assets/collapseup.png';
import collapsedown from '../../assets/collapsedown.png';
import './collapse.scss';

function Collapse({ title, content, isList }) {
  const [isOpen, setIsOpen] = useState(false);

  const Toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='collapse'>
      <button className='titre-collapse' onClick={Toggle}>
        <h2>{title}</h2>
        <img src={isOpen ? collapsedown : collapseup} alt="Toggle" />
      </button>
      {isOpen && (
        <div className='texte-collapse'>
          {isList ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;
