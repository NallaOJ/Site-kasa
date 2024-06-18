import React, { useState } from "react"
import  { logementsList }  from "../../Datas/logements"
import './slider.css'

/*function Slider(pictures) {
  const [ currentSlide, setCurrentSlide] = useState(0)

  const logement = logementsList.find(logement => logement.id === pictures)
  
  return (
    <div className="container-slider">
        {logementsList.map((id, pictures) => {
          return (
            <div className="slide">
              <img key={pictures[currentSlide]} src={pictures} alt={`Slide ${currentSlide}`} />
            </div>
          )
        })}
    </div>
  )
}*/




/*
const Slider = ({pictures}) => {
  const [ currentSlide, setCurrentSlide ] = useState(0)

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(Number(logementsList.pictures.length) - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  const nextSlide = () => {
    if (currentSlide === logementsList.pictures.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  const shouldRenderButtons = pictures.length > 1;
    const shouldRenderCounter = pictures.length > 1;

  return (
    <div className="container-slider">
        <div className="slide">
        {shouldRenderButtons && (
                <div onClick={prevSlide} className="prev">
                    <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white" />
                    </svg>
                </div>)}
            <img src={logementsList[currentSlide]} alt={`Slide ${pictures}`} className="image-carrousel" />
            {shouldRenderCounter && (
                    <div className="slide-counter">{currentSlide + 1}/{pictures.length}</div>
                )}
            {shouldRenderButtons && (
             <div onClick={nextSlide} className="next">
                    <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white" />
                    </svg>
                </div>)}
            
        </div>
    </div>
  )
}

export default Slider;*/

const Slider = ({ pictures = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? pictures.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === pictures.length - 1 ? 0 : currentSlide + 1);
  };

  const shouldRenderButtons = pictures.length > 1;
  const shouldRenderCounter = pictures.length > 1;

  return (
    <div className="container-slider">
      <div className="slide">
        {shouldRenderButtons && (
          <div onClick={prevSlide} className="prev">
            <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white" />
            </svg>
          </div>
        )}
        <img src={pictures[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="image-slide" />
        {shouldRenderCounter && (
          <div className="slide-counter">{currentSlide + 1}/{pictures.length}</div>
        )}
        {shouldRenderButtons && (
          <div onClick={nextSlide} className="next">
            <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
