import { baldeTinta } from "../assets"
import { motion } from "framer-motion"

const QuemSomos = () => {
  return (
    <div className="flex text-xs box-border w-full  items-center p-5 overflow-hidden 
    max-md:flex-col max-md:overflow-x-hidden max-md:justify-center max-md:text-base">

      <div className="flex flex-col w-full p-5 mb-28 border-2  bg-slate-100 shadow-lg bg-opacity-60 border-black rounded-md ml-1 indent-5
      max-md: text-xs">
        <h1 className=" font-caveat font-bold  mb-2 text-[1.40rem]">Quem Somos ?</h1>
        <p className="mb-3 ">Somos uma das empresas líderes na distribuição atacadista de materiais de construção no mercado nacional.<span className="font-bold">Com mais de 20 anos de mercado,</span>  trabalhando somente com marcas e produtos de qualidade com preços muito competitivos.
        </p>
        <p className="mb-3">Nossos diferenciais são: entrega rápida, mix de produtos sempre atualizado e excelência no atendimento.</p>
        <p className="mb-3">Contamos com uma equipe altamente qualificada com muita motivação para superar as expectativas de nossos clientes. Nosso principal objetivo é constantemente estar Inovando para tornar a parceria mais sólida e de longo prazo com nossos clientes.</p>
        <p>Atendemos nos segmentos de materiais de construção em geral, ferragens, elétrica , ferramentas ,tintas e hidráulica em todo território nacional.</p>
      </div>


      <img src={baldeTinta} alt="baldeTinta" className='w-[20rem] rounded shadow-2xl m-4 mb-32
      max-md:mb-64 max-md:absolute max-md:-z-10 max-md:mt-52 max-md:mr-10 '
      
      />


      <div className=" flex flex-col gap-10 w-full text-[0.8rem] z-1 
      max-md:mt-32">

        <motion.div className="flex flex-col shadow-2xl rounded-xl w-[60%] p-3 bg-yellow-300 bg-opacity-90 cursor-pointer"
          initial={{ y: -500 }}
          animate={{ y: 0, rotate: 360 }}
          transition={{ delay: 1, duration: 2, type: "spring" }}
          drag
        >
          <h1 className="font-bold">Missão</h1>
          <p className="indent-5 mt-2 font-caveat text-base">
            Distribuir materiais de construção com rapidez e qualidade, com foco na satisfação total de seus clientes, agindo com honestidade e sinceridade, incentivando o espírito de equipe de seus colaboradores.
          </p>
        </motion.div>

        <div className="flex ">

          <motion.div className="flex flex-col shadow-2xl rounded-xl w-[40%] p-4 bg-redAses bg-opacity-80 cursor-pointer"
            initial={{ y: -700 }}
            animate={{ y: 0, rotate: 360 }}
            transition={{ delay: 2, duration: 3, type: "spring" }}
            drag
          >
            <h1 className="font-bold">Visão</h1>
            <p className="indent-5 mt-2 font-caveat text-base">Ser uma das líderes na distribuição de materiais de construção no mercado nacional, sendo reconhecida como a empresa de maior valor para seus clientes.</p>
          </motion.div>

          <motion.div className="flex flex-col shadow-2xl rounded-xl w-[55%] h-40 p-5  bg-cyan-400 bg-opacity-80 m-2 cursor-pointer"
            initial={{ y: -500 }}
            animate={{ y: 0, rotate: 360 }}
            transition={{ delay: 3, duration: 3, type: "spring" }}
            drag

          >
            <h1 className="font-bold">Valores</h1>
            <p className="indent-5 mt-2 font-caveat text-base">
              Ética, inovação, rapidez, integridade, qualidade e resultados.
            </p>
          </motion.div>
        </div>

      </div>


    </div>
  )
}

export default QuemSomos