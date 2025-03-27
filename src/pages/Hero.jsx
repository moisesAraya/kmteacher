import React from 'react'
import fondo from '../assets/fondo.png'
import { motion } from "framer-motion"
import { slipeUp } from '../utility/animation'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section 

    style={{
      backgroundImage: `url(${fondo})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}

    className='pt-15 lg:pt-0.5'>
      <div className='grid grid-cols-1 md:grid-cols-1 items-center'>
        
      <div className='pl-2 pr-2 sm:p-10 md:p-15 lg:p-30 xl:p-36 text-center'>
          <motion.p 
            className='py-40 sm:p-25 text-white text-5xl'
            variants={slipeUp(0.3)}
            initial="initial"
            animate="animate"
          >
            Aprende inglés online y alcanza tus metas con clases diseñadas para ti
          </motion.p>
        </div>

      </div>
      
      {/*Botones*/}
      {/*Conoceme*/}

<div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4 justify-items-center'>       
       <motion.div 
          className='flex flex-col items-center gap-4'
          variants={slipeUp(1)}
          initial="initial"
          animate="animate"
        >
          <a
          className='bg-purple-600 py-2 px-12 rounded-3xl text-white hover:bg-purple-700 transition-all duration-300 items-center cursor-pointer'>
            <Link to="/about"> Conoceme <i className="bi bi-file-person text-xl ml-2"></i></Link>
          </a>
        </motion.div>
        
        {/*Conoce mis horarios*/}
        <motion.div 
          className='flex flex-col items-center gap-4'
          variants={slipeUp(1)}
          initial="initial"
          animate="animate"
        >
          <a className='bg-purple-600 py-2 px-12 rounded-3xl text-white hover:bg-purple-700 transition-all duration-300 items-center cursor-pointer'>
            Conoce mis horarios <i className="bi bi-calendar-date text-xl ml-2"></i>
          </a>
        </motion.div>

        
        {/*Contactame*/}

        <motion.div 
          className='flex flex-col items-center gap-4'
          variants={slipeUp(1)}
          initial="initial"
          animate="animate"
        >
          <a className='bg-purple-600 py-2 px-12 rounded-3xl text-white hover:bg-purple-700 transition-all duration-300 items-center cursor-pointer'>
            Contactame <i className="bi bi-chat-dots text-xl ml-2"></i>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero