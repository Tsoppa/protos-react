import React, {useState} from 'react';
import './MainContent.css';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import { SliderData } from './SliderData';

const MainContent = ({slides}) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  // setTimeout(nextSlide, 4000);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className="slider">
      <FaArrowLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div className={index === current ? 'slide-active' : 'slide'} key={index}>
            {index === current && (<img src={slide.image} alt="" className="slider-image" />)}
          </div>
        )
      })}
    </section>
  )
}

export default MainContent