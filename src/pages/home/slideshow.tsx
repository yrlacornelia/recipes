import React from 'react'
import './home.css';
import Btn from '../../components/button/btn';
import image from '../../images/slide1.jpg';

export default function Slideshow() {
    return (
        <div className='slideshow'>
            <div className='slide-container'>
                <div className='left-side'>
                    <img src={image} alt='hi'></img>
                </div>
                <div className='right-side'>
                    <div className='text-container'>
                        <h2>Dessert</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Libero ullamcorper netus fringilla ipsum ante dolor.</p>
                        <Btn />
                        </div>
                </div>
            </div>
        </div>
    )
}
