import React, {useState} from 'react'
import { listaProdutos } from "../assets/produtos"
import { Link } from 'react-router-dom'
import {AiFillThunderbolt} from "react-icons/ai"

const Produtos = () => {

  const paragraphCSS = 'cursor-pointer duration-75 hover:text-red-600'
  const [showTopic, setshowTopic] = useState("Produtos")
  const [test, settest] = useState(listaProdutos)

  const changeProdutos = (type) =>{
    const productsFilteered = listaProdutos.filter(x => x.type === type)
    settest(productsFilteered)
    setshowTopic(productsFilteered[0].group)
   }

 

  return (
    <div className='flex justify-center w-full p-10 
    max-md:flex-col '>
      <div className='flex flex-col  text-xs gap-5 w-[30%] 
     max-md:w-full max-md:flex-row  max-md:justify-center max-md:pb-4'>
        <div>
          <h2 className='mb-0.5 font-semibold
         max-md:pb-1  '>
            ELÉTRICA
          </h2>
          <div className='ml-1 text-gray-950'>

          <p className={paragraphCSS} onClick={()=>changeProdutos(1)}>Chuveiros e Resistências</p>
          <p className={paragraphCSS} onClick={()=>changeProdutos(2)}>Disjuntores</p>
          <p className={paragraphCSS} onClick={()=>changeProdutos(3)}>Fios e Cabos</p>
          <p className={paragraphCSS} onClick={()=>changeProdutos(4)}>Fitas Isolantes</p>
          <p className={paragraphCSS} onClick={()=>changeProdutos(5)}>Lâmpadas</p>
          </div>
        </div>

        <div className='  max-md:border-x max-md:p-2 max-md:pt-0  max-md:border-black'>
          <h2 className=' mb-0.5 font-semibold
           max-md:pb-1  '>
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
          <div className='ml-1 text-gray-950'>

          <p className={paragraphCSS} onClick={()=>changeProdutos(11)}>Cadeados</p>
          <p className={paragraphCSS} onClick={()=>changeProdutos(12)}>Desengripantes</p>
          <p className={paragraphCSS} onClick={()=>changeProdutos(9)}>Tintas e Spray</p>
          <p className={paragraphCSS} onClick={()=>changeProdutos(14)}>Serras e Arcos de Serra</p>
          </div>
        </div>
      </div>

      <div className='flex w-full flex-wrap border border-r-0 border-t-0 border-b-0 m-2 box-border border-gray-500 gap-7
      max-md:border-hidden max-md:flex-col max-md:items-center max-md:justify-center'>
        <h1 className=' w-full text-[1.2rem] 
          max-md:w-auto'>
        {showTopic}
        </h1>
        {test.map((produtos, index)=> {
          return (
            <div key={index} className='flex   w-[30%] flex-col items-center justify-center flex-wrap max-md:w-full' >
                <img className='w-36 rounded shadow-lg' src={produtos.img} alt={produtos.name} />
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
  )
}

export default Produtos