import React, { useEffect, useState } from 'react';
import './nav.css';

export default function Nav() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={scrolling ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <a href="#">Navlink </a>
        <a href="#">Navlink </a>
        <a href="#">Navlink </a>
      </div>
      <div className="container center">
        <a href="#" className="logo"> Logo</a>
      </div>
      <div className="container right">
        <div className="right-content">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          <p>Logga in</p>
        </div>
      </div>
    </nav>
  );
}
