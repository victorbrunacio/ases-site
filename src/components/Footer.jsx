import React from 'react'
import { Link } from 'react-router-dom'
import { meioPagamento, bradesco, santander } from "../assets"

const Footer = () => {
  return (
    <footer className='relative bottom-0 z-0 text-gray-100 text-[1rem] w-full flex flex-col items-center  justify-center  bg-gray-700 
    
    '>
      <div className=' w-full flex px-10 items-center justify-center bg-black p-2 z-11'>

        <div className=' w-full flex px-10 items-center justify-center bg-black p-2'>

          <div className='absolute left-5 text-base 
            max-md:hidden' >
            <Link to="/">
              <h3 className='hover:text-redAses duration-500'>
                Home
              </h3>
            </Link>

            <Link to="/contato">
              <h3 className='hover:text-redAses duration-500'>
                Seja um representante
              </h3>
            </Link>

            <Link to="/quemsomos">
              <h3 className='hover:text-redAses duration-500'>
                Sobre a ASES
              </h3>
            </Link>

            <Link to="/produtos">
              <h3 className='hover:text-redAses duration-500'>
                Nossos Produtos
              </h3>
            </Link>

          </div>

          <div className='flex w-full flex-col items-center  gap-1'>
            <h3>FORMAS DE PAGAMENTO</h3>
            <p className='text-[0.9rem] '>Atendimento somente para Pessoa Jurídica</p>

            <img src={meioPagamento} alt="img pagamentos" className='h-2.5 mb-2' />
            <hr className='w-52 rounded border border-white' />
            <h3>BOLETOS</h3>
            <p className='text-[0.9rem]'>Retirada de 2º via ou atualização de boletos.</p>
            <div className='flex '>
              <img src={bradesco} alt="bradesco" className='h-4' />
              <img src={santander} alt="santander" className='h-4' />
            </div>
          </div>

        </div>



      </div>


      <div className='flex flex-col gap-5 items-center p-4 text-[0.8rem] text-gray-200 justify-center'>
        <div className='flex max-md:flex-col justify-center items-center gap-1'>
          <p>Abertos: De Segunda à Sexta - 08:00 às 18:00</p>
          <p>Localização: Rua do Matoso, 132 - Praça da Bandeira - Rio de janeiro/ RJ  - CEP: 20270-135</p>

        </div>

        <div className='flex max-md:flex-col justify-center items-center gap-1'>

          <p>Central de Vendas: 21 3088-4848</p>
          <p>Whatsapp: 21 99602-4800</p>
          <p>E-mail: vendas@asesdistribuidora.com.br</p>
        </div>

        <div className='flex max-md:flex-col justify-center items-center gap-1'>
          <p>Razão social: VC Ferragens Ltda</p>
          <p>CNPJ: 12.324.723/0001-25</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer