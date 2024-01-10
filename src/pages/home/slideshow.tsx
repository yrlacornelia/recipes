import React from 'react'
import './home.css';
import Btn from '../../components/button/btn';
import image from '../../images/slide1.jpg';

export default function Slideshow() {
    return (
        <div className='slideshow'>
                <div className='left-side'>
            
            <div className='image-container'>
                 <img src={image} alt='hi'></img>
                 </div>
     
                </div>
                <div className='right-side '>
                    <div className='text-container '>
                        <div className='text-item'></div>
                        <h2>Dessert</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Libero ullamcorper netus fringilla ipsum ante dolor.</p>
                        <Btn />
                        </div>
                        <div className='arrows'>
                             <svg width="16" height="41" viewBox="0 0 16 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.70711 0.292892C8.31658 -0.0976295 7.68342 -0.0976295 7.29289 0.292892L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41422L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292892ZM9 41L9 1H7L7 41H9Z" fill="#323232" fill-opacity="0.56"/></svg>
                        <svg width="16" height="41" viewBox="0 0 16 41" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.29289 40.7071C7.68342 41.0976 8.31658 41.0976 8.70711 40.7071L15.0711 34.3431C15.4616 33.9526 15.4616 33.3195 15.0711 32.9289C14.6805 32.5384 14.0474 32.5384 13.6569 32.9289L8 38.5858L2.34315 32.9289C1.95262 32.5384 1.31946 32.5384 0.928932 32.9289C0.538408 33.3195 0.538408 33.9526 0.928932 34.3431L7.29289 40.7071ZM7 0L7 40H9L9 0L7 0Z" fill="#323232" fill-opacity="0.56"/> </svg>
                       
                        </div>    
                </div>
     
        </div>
    )
}
