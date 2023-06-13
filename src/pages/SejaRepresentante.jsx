import React, { useState } from 'react'
import { homenTrabalho } from "../assets"
import { motion } from 'framer-motion';

const SejaRepresentante = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [curriculo, setCurriculo] = useState(null);
    const [estado, setEstado] = useState('');
    const [regiao, setRegiao] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Realize qualquer validação ou processamento adicional aqui

        // Limpe o formulário após o envio
        setNome('');
        setEmail('');
        setTelefone('');
        setCurriculo(null);
        setEstado('');
        setRegiao('');
    };

    const handleCurriculoChange = (e) => {
        const file = e.target.files[0];
        setCurriculo(file);
    };

    return (
        <div className="flex p-10   text-[1rem] 
        max-md:pl-1 max-md:justify-center max-md:pr-0 mb-20">

            <div className='md:w-full md:flex md:flex-col md:items-center '>
                <h1 className='text-[1.40rem]  underline underline-offset-8 font-bold pb-1 m-auto
            max-md:underline max-md:underline-offset-8 max-md:font-serif max-md:ml-3'>
                    Seja um Representante
                </h1>
                <motion.img src={homenTrabalho} alt="homenTrabalho" className='rounded w-[30rem] shadow-2xl mt-10 cursor-pointer
            max-md:w-[25rem] max-md:h-[20rem] '
                    whileTap={{ scale: 1.2, y: 70 }}
                    transition={{ duration: 2 }}
                />
            </div>

            <div className='w-full md:flex md:flex-col md:justify-center md:mr-40 md:mt-16 max-md:mt-24'>
                <form onSubmit={handleSubmit} className="max-w-sm mx-auto
            max-md:ml-2">
                    <div className="mb-4">
                        <label htmlFor="nome" className="block mb-2  text-gray-700">
                            Nome:
                        </label>
                        <input
                            id="nome"
                            type="text"
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
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
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
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
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="curriculo" className="block mb-2  text-gray-700">
                            Currículo (PDF):
                        </label>
                        <input
                            id="curriculo"
                            type="file"
                            accept="application/pdf"
                            onChange={handleCurriculoChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="estado" className="block mb-2  text-gray-700">
                            Estado:
                        </label>
                        <select
                            id="estado"
                            value={estado}
                            onChange={(event) => setEstado(event.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                        >

                            <option value="">Selecione um estado</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="regiao" className="block mb-2  text-gray-700">
                            Região:
                        </label>
                        <input
                            id="regiao"
                            type="text"
                            value={regiao}
                            onChange={(event) => setRegiao(event.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                        />
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

        </div>
    )
}

export default SejaRepresentante