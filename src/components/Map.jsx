import React from 'react'
import { FiMapPin } from "react-icons/fi"

const Map = () => {

    return (

        <div className=' w-full flex  items-center  p-10 justify-around 
        max-md:flex-col gap-5  overflow-scroll  
        ' >     

        <iframe
                
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8967.234011374458!2d-43.212938!3d-22.91562!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997faada0996a1%3A0x9e724a986509211a!2sR.%20do%20Matoso%2C%20132%20-%20Praca%20da%20Bandeira%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020270-135%2C%20Brasil!5e1!3m2!1spt-BR!2sus!4v1686328801474!5m2!1spt-BR!2sus"
                width="550"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className='rounded shadow-2xl
            max-md:w-[350px] max-md:h-[350px] '
            ></iframe>
       
              

            <div className='text-xs flex flex-col items-center justify-center gap-10'>
                <div>
                    <p>Rio de Janeiro - RJ, 20270-135</p>
                    <p>R. do Matoso, 132 - Praca da Bandeira </p>
                </div>

                <FiMapPin className='text-black text-[5rem]' />
                <p className='text-6xl font-mono '>Ases</p>
            </div>


        </div>

    )
}

export default Map