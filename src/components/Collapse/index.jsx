import React, { useState } from 'react';
import { CollapseContent } from '../../Datas/collapse';
import button from '../../assets/button.png'
import './collapse.css'

function CollapseList() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (index) => {
    setIsOpen(isOpen === index ? false : index);
  };

  return (
    <div className='collapse-list'>
      {CollapseContent.map(({ id, title, content }, index) => (
        <div key={id} className='collapse'>
          <button className='collapse-header' onClick={() => handleToggle(index)}>{title}
          <img
              src={button}
              alt="Toggle"
              className={`collapse-icon ${isOpen ? 'closed' : 'open'}`} />
            </button>
          {isOpen === index && (
            <div className='collapse-content'>
              {Array.isArray(content) ? (
                content.map((item, idx) => <p key={id}>{item}</p>)
              ) : (
                <p>{content}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CollapseList;
