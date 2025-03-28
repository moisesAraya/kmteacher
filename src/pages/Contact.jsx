import React from "react";
import fondo_invertido from '../assets/fondo_inv.png';

const Contact = () => {
  return (
    <section
     style={{
                    backgroundImage: `url(${fondo_invertido})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}

    className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center p-6">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6">Contáctanos</h1>
        <p className="text-lg mb-6">
          ¿Tienes preguntas? ¡Escríbenos! Estaremos encantados de ayudarte.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-left mb-2 text-sm font-medium">Nombre</label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-left mb-2 text-sm font-medium">Correo Electrónico</label>
            <input
              type="email"
              placeholder="Tu correo"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-left mb-2 text-sm font-medium">Mensaje</label>
            <textarea
              placeholder="Tu mensaje"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-all"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;