import React from 'react'
import Hero from './hero'
import './home.css';
import TextBoxes from './textboxes';

export default function Home() {
  return (
    <div className='home-container'>
        <Hero/> 
        <TextBoxes/>
    </div>
  )
}
