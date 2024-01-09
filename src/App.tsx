import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home';
import Nav from './components/navigation/nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/profile/profile';

function App() {
  return (   
    <>
    <Nav />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router></>
  
  );
}

export default App;
