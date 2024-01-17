import React, { useState } from 'react';
import styles from './slideshow.module.css';
import Btn from '../../components/button/btn';

export default function Slideshow() {
  const textItems = [
    {
      id: 0,
      title: 'Dinner',
      description: 'Lorem ipsum dolor sit amet consectetur. Libero ullamcorper netus fringilla ipsum ante dolor.',
    },
    {
      id: 1,
      title: 'Lunch',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
      id: 2,
      title: 'Lunch',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(1);

  const handleButtonClick = (direction:string) => {
    // if cuurrent 
    if (direction === 'up' ) {
      if(currentTextIndex > 1)
      setCurrentTextIndex(currentTextIndex - 1);
    else  {
      setCurrentTextIndex(3)
    }

    } 
    else if (direction === 'down' ) {
      if(currentTextIndex < textItems.length ){
      setCurrentTextIndex(currentTextIndex + 1);}
      else{
        setCurrentTextIndex(1)
      }
    }

  };

  return (
    <div className={styles.slider}>
<a href={`#slide-${currentTextIndex}`} onClick={() => handleButtonClick('up')}>
  Previous
</a>

<a href={`#slide-${currentTextIndex}`} onClick={() => handleButtonClick('down')}>
  Next
</a>


      <div className={styles.slides}>
<div id="slide-1">
      1
    </div>
    <div id="slide-2">
      2
    </div>
    <div id="slide-3">
      3
    </div>


      </div>
    </div>
  );
}
