import React from 'react'
import heroImage from '../../images/hero.jpg';
import Star from './star';

export default function Cards() {
  return (
<div className='box-container'>
  <div className='box'>
    <img src={heroImage} />
     <div className='star-container'>
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
    <h2>Salmon</h2>
   
  </div>
  <div className='box'>
    <img src={heroImage} />
    <div className='star-container'>
      <Star />
      <Star />
      <Star />
    </div>
    <h2>Pokebowl</h2>
  </div>
  <div className='box'>
    <img src={heroImage} />
    <div className='star-container'>
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
    <h2>Pesto pasta</h2>
  </div>
</div>

  )
}
