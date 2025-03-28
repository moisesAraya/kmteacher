import React from "react";
import fondo from '../assets/fondo.png'

const Services = () => {
  return (
    <section 
    style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
    
    className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-3xl font-bold mb-6">Nuestros Servicios</h1>
        <p className="text-lg mb-6">
          Ofrecemos una variedad de servicios personalizados para satisfacer tus necesidades. ¡Conoce lo que podemos hacer por ti!
        </p>
        <ul className="list-disc list-inside text-left mx-auto max-w-lg">
          <li className="mb-4">Clases personalizadas de inglés</li>
          <li className="mb-4">Asesoría en proyectos de aprendizaje</li>
          <li className="mb-4">Clases grupales y talleres interactivos</li>
          <li className="mb-4">Preparación para certificaciones internacionales</li>
        </ul>
      </div>
    </section>
  );
};

export default Services;