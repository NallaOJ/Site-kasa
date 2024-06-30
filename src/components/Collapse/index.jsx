import React, { useState, useRef } from 'react';
import collapseup from '../../assets/collapseup.png';
import collapsedown from '../../assets/collapsedown.png';
import './collapse.scss';

function Collapse({ title, content, isList }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='collapse'>
      <button className='titre-collapse' onClick={toggleCollapse}>
        <h2>{title}</h2>
        <img src={isOpen ? collapsedown : collapseup} alt="Toggle" />
      </button>
      <div
        className={`texte-collapse ${isOpen ? 'open' : ''}`}
        style={{ maxHeight: isOpen ? contentRef.current.scrollHeight + 'px' : '0' }}
        ref={contentRef}
      >
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
    </div>
  );
}

export default Collapse;
