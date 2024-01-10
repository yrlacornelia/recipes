import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home';
import Nav from './components/navigation/nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/profile/profile';
import Footer from './components/footer/footer';

function App() {
  return (   
    <>
    <Nav />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    <Footer />
    </>
  
  );
}

export default App;
