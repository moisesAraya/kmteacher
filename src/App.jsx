import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/about" element={<About/>} />

      </Routes>
    </Router>
  );
}

export default App;
