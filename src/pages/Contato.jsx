import React, { useState } from 'react'
import { cardEngenheiro } from "../assets"
import { HiOutlineMail } from "react-icons/hi"
import { BsWhatsapp, BsTelephone } from "react-icons/bs"
import { motion } from 'framer-motion'

const Contato = () => {

  // Defina os estados para armazenar os valores do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Função para manipular o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Realize qualquer validação ou processamento adicional aqui

    // Limpe o formulário após o envio
    setNome('');
    setEmail('');
    setTelefone('');
    setMensagem('');
  };

  return (
    <div className='flex p-10 gap-5 justify-center content-center text-[0.6rem] items-center 
    max-md:px-2'>
      <div className='flex flex-col items-start  
      max-md:mb-10'>

        <div className='flex flex-col max-md:absolute max-md:top-12 max-md:left-4 max-md:mr-5
        max-md:border-b-2 max-md:border-black max-md:border-opacity-50'>

          <h1 className='text-xs font-serif font-bold pb-1 underline underline-offset-4
      max-md:text-base max-md:font-sans '>
            FALE CONOSCO
          </h1>
          <p className='max-md:text-xs indent-3 pb-1'>Envie dúvidas, sugestões ou reclamações. Por este canal estaremos sempre conectados e prontos para lhe atender.</p>

          <p className='max-md:text-xs flex items-center gap-2'><HiOutlineMail /> Solicite seu orçamento por e-mail: <span className='font-bold'>vendas@asesdistribuidora.com.br</span></p>
          <p className='max-md:text-xs flex items-center gap-2'><BsTelephone/> Central de Vendas: <span className='font-bold'>21 3088-4848</span></p>
          <p className='max-md:text-xs flex items-center gap-2'><BsWhatsapp/> Central de Vendas WhatsApp: <span className='font-bold'>21 99602-4800</span></p>

        </div>


        <form onSubmit={handleSubmit} className="flex flex-col justify-start mt-16 
      max-md:mt-24">
          <div className="mb-4">
            <label htmlFor="nome" className="block mb-2  text-gray-700">
              Nome:
            </label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-red-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2  text-gray-700">
              Email:
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-red-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="telefone" className="block mb-2  text-gray-700">
              Telefone:
            </label>
            <input
              id="telefone"
              type="tel"
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
              className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-red-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mensagem" className="block mb-2  text-gray-700">
              Mensagem:
            </label>
            <textarea
              id="mensagem"
              value={mensagem}
              onChange={(event) => setMensagem(event.target.value)}
              className="w-full h-20 p-1 border border-gray-300 rounded focus:outline-none focus:border-red-500"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-1 text-lg text-white bg-beje2 rounded hover:bg-red-600 transition"
            >
              Enviar
            </button>
          </div>
        </form>

      </div>
      <div>
        <motion.img src={cardEngenheiro} alt="cardEngenheiro" className='rounded h-80 shadow-2xl mt-5 cursor-pointer
      max-md:w-[15rem] max-md:h-[15rem]'
      whileTap={{scale:1.2, y:70}}
      transition={{duration:2}}
      />
      </div>
    </div>
  )
}

export default Contato