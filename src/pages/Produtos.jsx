import React, {useState} from 'react'
import { listaProdutos } from "../assets/produtos"
import { Link } from 'react-router-dom'
import {AiFillThunderbolt} from "react-icons/ai"

const Produtos = () => {

  const paragraphCSS = 'cursor-pointer duration-75 hover:text-red-600 max-md:border-b max-md:border-black'
  const [showTopic, setshowTopic] = useState("Produtos")
  const [test, settest] = useState(listaProdutos)

  const changeProdutos = (type) =>{
    const productsFilteered = listaProdutos.filter(x => x.type === type)
    settest(productsFilteered)
    setshowTopic(productsFilteered[0].group)
   }

 

  return (
    <div className='flex justify-center w-full p-10 min-h-screen overflow-auto 
    max-md:flex-col '>
      <div className='flex flex-col  gap-5 w-[30%] 
     max-md:w-full  max-md:justify-center max-md:pb-4 max-md:gap-10'>
        <div>
          <h2 className='mb-0.5 font-semibold
         max-md:pb-1  '>
            ELÉTRICA
          </h2>
          <div className='ml-1 text-gray-950 
          max-md:flex max-md:flex-col max-md:gap-1'>

          <p className={paragraphCSS} onClick={()=>changeProdutos(1)}>Chuveiros e Resistências</p>
          <p className={paragraphCSS} onClick={()=>changeProdutos(2)}>Disjuntores</p>
          <p className={paragraphCSS} onClick={()=>changeProdutos(3)}>Fios e Cabos</p>
          <p className={paragraphCSS} onClick={()=>changeProdutos(4)}>Fitas Isolantes</p>
          <p className={paragraphCSS} onClick={()=>changeProdutos(5)}>Lâmpadas</p>
          </div>
        </div>

        <div>
          <h2 className=' mb-0.5 font-semibold
           max-md:pb-1'>
            COLAS E ADESIVOS
          </h2>
          <div className='ml-1 text-gray-950'>

          <p className={paragraphCSS} onClick={()=>changeProdutos(6)}>Fita Adesiva</p>
          </div>
        </div>
  
        <div>
          <h2 className='mb-0.5 font-semibold
           max-md:pb-1'>
            FERRAGENS E FERAMENTAS
          </h2>
          <div className='ml-1 text-gray-950
           max-md:flex max-md:flex-col max-md:gap-1'>

          <p className={paragraphCSS} onClick={()=>changeProdutos(11)}>Cadeados</p>
          <p className={paragraphCSS} onClick={()=>changeProdutos(12)}>Desengripantes</p>
          <p className={paragraphCSS} onClick={()=>changeProdutos(9)}>Tintas e Spray</p>
          <p className={paragraphCSS} onClick={()=>changeProdutos(14)}>Serras e Arcos de Serra</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col   w-full border border-r-0 border-t-0 border-b-0 m-2 box-border border-gray-500 
      max-md:border-hidden max-md:flex-col max-md:items-center max-md:justify-center'>

        <h1 className=' w-full text-[2rem] ml-3 
          max-md:w-auto max-md:text-[1.4rem]'>
        {showTopic}
        </h1>
        <div className='flex flex-wrap w-full gap-5 mt-5'>
        {test.map((produtos, index)=> {
          return (
            <div key={index} className='flex flex-col  w-[20rem] items-center 
            max-md:w-full' >
                <img className='w-36 h-36 mb-2 rounded shadow-lg' src={produtos.img} alt={produtos.name} />
                <p>{produtos.name}</p>
                <Link to="/contato">
                   <p className='text-xs hover:text-red-600 flex justify-center items-center'>
                    <AiFillThunderbolt/>  Fazer cotação
                  </p>
                </Link>
            </div>
          )
        })}
        </div>
       
        
      
      </div>
    </div>
  )
}

export default Produtos