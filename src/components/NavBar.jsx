import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { logoAses } from '../assets';

import { HiMenu } from "react-icons/hi"
import { AiOutlineCloseCircle } from "react-icons/ai"


const NavBar = () => {
  const activeT = "duration-500  underline max-md:no-underline max-md:text-red-600 hover:text-white font-caveat max-md:border-gray-900  max-md:border-b"
  const activef = "p-1 duration-500 hover:text-white font-caveat max-md:border-gray-900 max-md:border-b"

  const [open, setOpen] = useState(false)

  const navLinkCloseNavBar = () => {
    setTimeout(() => {
      setOpen(false)
    }, 500);

  }


  return (
    <div className='flex justify-evenly items-center border-solid border-black border-b  p-5 box-border h-[3rem] bg-gradient-to-r  from-white to-beje2 text-[1.2rem]
    max-md:flex max-md:justify-start max-md:p-2 
    '>
   
      <NavLink to="/">
        <img src={logoAses} alt="logoAses" className='h-8  ml-7 max-md:relative ' />
      </NavLink>

      <p className='md:hidden text-base ml-7'>Distribuidora atacadista</p>
      {!open ? (<HiMenu
        onClick={() => setOpen(!open)}
        className=' absolute right-7 text-2xl md:hidden cursor-pointer' />) :
        <AiOutlineCloseCircle
          onClick={() => setOpen(!open)}
          className=' absolute right-7 text-2xl md:hidden cursor-pointer ' />}



      <nav className={` w-[100%] flex justify-evenly p-4 rounded-md
      max-md:flex-col  max-md:w-[60%] max-md:absolute max-md:right-12 max-md:top-10  max-md:justify-center max-md:bg-beje2 max-md:bg-opacity-90 max-md:border border-black max-md:text-black   max-md:shadow max-md:content-center max-md:z-10 max-md:text-2xl 
      ${open ? "" : "max-md:hidden"}`} >

        <NavLink
          onClick={() => navLinkCloseNavBar()}
          to="/"
          className={({ isActive }) => isActive ? activeT : activef}>
          Home
        </NavLink>

        <NavLink
          onClick={() => navLinkCloseNavBar()}
          to="/produtos"
          className={({ isActive }) => isActive ? activeT : activef}
        >
          Produtos
        </NavLink>

        <NavLink
          onClick={() => navLinkCloseNavBar()}
          to="/contato"
          className={({ isActive }) => isActive ? activeT : activef}
        >
          Contato
        </NavLink>

        <NavLink
          onClick={() => navLinkCloseNavBar()}
          to="/quemsomos"
          className={({ isActive }) => isActive ? activeT : activef} >
          Sobre a ASES
        </NavLink>
        <NavLink
          onClick={() => navLinkCloseNavBar()}
          to="/sejarepresentante"
          className={({ isActive }) => isActive ? activeT : activef} >
          Seja Um Representante
        </NavLink>
      </nav>
    </div>
  );
};


export default NavBar