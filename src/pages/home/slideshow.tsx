import React, { useState } from 'react'
import './home.css';
import Btn from '../../components/button/btn';
import image from '../../images/slide1.jpg';


export default function Slideshow() {
    const textItems = [
        {
          title: 'Dinner',
          description: 'Lorem ipsum dolor sit amet consectetur. Libero ullamcorper netus fringilla ipsum ante dolor.',
        },
        {
          title: 'Lunch',
          description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        },
        // test push
      ];
    
      const [currentTextIndex, setCurrentTextIndex] = useState(0);
    
      const nextSlide = () => {
        const newIndex = (currentTextIndex + 1) % textItems.length;
        setCurrentTextIndex(newIndex);
      };
    
      const prevSlide = () => {
        const newIndex = (currentTextIndex - 1 + textItems.length) % textItems.length;
        setCurrentTextIndex(newIndex);
      };
    
    return (
        <div className='slideshow'>
                <div className='left-side'>
            
            <div className='image-container'>
                 <img src={image} alt='hi'></img>
                 </div>
     
                </div>
                <div className="slider">
      <button onClick={prevSlide}>Previous</button>
      <div className="slide-wrapper">
        {textItems.map((item, index) => (
          <div
            key={index}
            className={`slide ${index === currentTextIndex ? 'active' : ''}`}
          >
            <div className='text-item'>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              {/* You can include Btn component here */}
            </div>
          </div>
        ))}
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
     
        </div>
    )
}
