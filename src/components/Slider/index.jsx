import React, { useState } from 'react'
import './slider.css'
import prevButton from '../../assets/prevButton.png'
import nextButton from '../../assets/nextButton.png'

function Slider({ slides }) {

  const images = slides
  const length = slides.length

  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : length - 1;
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    const index = currentSlide < length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index)
  }

  return (
    <div className='slider'>
      <div className='slider-image' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((slides, index) => (
          <img 
          className='image'
          key={index}
          src={slides}
          alt=""
          ></img>
        ))}
      </div>
{length > 1 && ( //Le compteur est conditionnellement rendu seulement si length > 1. Utilisation de <> </> pour grouper les éléments JSX conditionnels (les boutons et le compteur)
  <>
  <div className='slider-box-button'>
    <button className='prev-button' onClick={prevSlide}>
      <img src={prevButton} alt='prev' ></img>
    </button>
    <button className='next-button' onClick={nextSlide}>
    <img src={nextButton} alt='next' ></img>
    </button>
    </div>
    <div className='slider-counter'>
        {currentSlide + 1} / {length}
      </div>
    </>
)}
    </div>
  )
}

export default Slider;