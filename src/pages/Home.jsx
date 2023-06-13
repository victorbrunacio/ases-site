import React, { useEffect } from 'react'
import { Map, Slider,SliderMobile,SliderBrands } from "../components"
import { Link } from 'react-router-dom'

import { imperialNova, compressorAr } from '../assets'
import { ceraBrilho } from "../assets/produtos/automotivos"

import { motion } from 'framer-motion'

const Home = () => {

  return (
    <div className='flex flex-col items-center justify-center overflow-hidden'>
      <Slider />
      <SliderMobile/>
      <div className='w-full h-28 bg-pattern-homeSlogan bg-cover mt-5 flex items-center justify-center'>
        <p className='text-2xl text-white font-sans font-bold
        max-md:ml-6 max-md:mr-6 '>Há mais de 20 anos Distribuindo com qualidade e agilidade!</p>
      </div>

      <div className='flex justify-center items-center flex-col my-5 gap-4
      '>
        <h2 className='font-mono font-bold 
         max-md:text-lg'>Mix de Produtos</h2>
        <div className='flex flex-col justify-center px-16 border-opacity-50 items-center border-black border-2 p-5  border-x-0 gap-5'>
          <div className='flex justify-center items-center gap-16 
          max-md:flex-wrap'>
            <img src={ceraBrilho} alt="ceraBrilho" className='w-[13rem] rounded shadow' />
            <img src={imperialNova} alt="imperialNova" className='w-[13rem] rounded shadow' />
            <img src={compressorAr} alt="compressorAr" className='w-[13rem] rounded shadow' />
          </div>

          <Link to="/produtos" type='button' className='border-black border p-1 rounded hover:bg-red-500 hover:shadow-lg hover:text-white duration-200
          max-md:text-xl'>
          <motion.div
          initial={{ x: 2 }}
          animate={{ x: -2 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
          >
            Conferir produtos
          </motion.div>
          </Link>
        </div>
      </div>

      <SliderBrands/>

      <Map />

   
    </div>
  )
}

export default Home