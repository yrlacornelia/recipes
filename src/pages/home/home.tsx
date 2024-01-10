import React from 'react'
import Hero from './hero'
import './home.css';
import TextBoxes from './textboxes';
import Slideshow from './slideshow';
import Cards from './cards';

export default function Home() {
  return (
    <div className='home-container'>
        <Hero/> 
        <TextBoxes/>
        <Slideshow /> 
        <Cards />
    </div>
  )
}
