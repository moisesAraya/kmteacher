import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App = () => {

  return (
    <Router>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
    </Router>
  );
}

export default App;
