import React from "react";
import fondo_invertido from '../assets/fondo_inv.png'; // Importar tu imagen correctamente

const About = () => {
    return (
        <section 
            style={{
                backgroundImage: `url(${fondo_invertido})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="min-h-screen text-gray-800 flex flex-col items-center justify-center p-6"
        >
            <div className="max-w-3xl text-center">
                {/* Encabezado */}
                <h1 className="text-3xl font-bold mb-4">Acerca de mí</h1>
                
                {/* Breve descripción */}
                <p className="text-lg mb-6">
                    ¡Hola! Soy Moisés Araya, estudiante de Ingeniería Civil en Informática en la Universidad del Bío-Bío.
                    Apasionado por el desarrollo web, la inteligencia artificial y la tecnología en general.
                    Me encanta aprender nuevas habilidades y trabajar en proyectos que conecten creatividad y funcionalidad.
                </p>
                
                {/* Intereses */}
                <div>
                    <h2 className="text-2xl font-semibold mb-3">Intereses</h2>
                    <ul className="list-disc list-inside text-left mx-auto max-w-lg">
                        <li>Desarrollo web dinámico y moderno</li>
                        <li>Entrenamiento de modelos de IA</li>
                        <li>Exploración del cine y sus aspectos técnicos</li>
                        <li>Resolución de problemas de hardware</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;