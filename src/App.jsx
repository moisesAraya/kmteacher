import React from 'react';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import fondo from './assets/fondo.png'

const App = () => {

  const bgImagen = {
    backgroundImage: `url(${fondo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    position: 'relative'
  }
  return (
    <div style={bgImagen} className='overFlow-hidden min-h-screen'>
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
