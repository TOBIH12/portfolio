"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { assets } from "./assests";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const NavBar = ({header, about, works}: any) => {
   const [showMobileMenu, setShowMobileMenu] = useState(false);

 useEffect(() => {
    if(showMobileMenu){
        document.body.style.overflow = 'hidden'
    }else{
        document.body.style.overflow = 'auto'
    }

    return () => {
        document.body.style.overflow = 'auto'; // Reset overflow when component unmounts
    }
 }, [showMobileMenu])

  return (
    <>
    <header className='fixed top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-3 px-6 md:px-18 lg:px-22 backdrop-blur-md'>

            <Link href="/">
            <h2 className="text-2xl font-bold text-[#03045E]">Tobi Bolaji</h2>
            </Link>

            <ul className='hidden md:flex gap-7 text-[#03045E]'>
                <a href={header} className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href={about} className='cursor-pointer hover:text-gray-400'>About</a>
                <a href={works} className='cursor-pointer hover:text-gray-400'>Works</a>
            </ul>

             <ul className='hidden md:flex gap-7 text-[#03045E]'>
                <a href={`https://github.com/TOBIH12`} target="_blank" className='cursor-pointer hover:text-gray-400'><FaGithub className="text-2xl" /></a>
                <a href={`https://wa.me/+2349158877369`} target="_blank" className='cursor-pointer hover:text-gray-400'><FaWhatsapp className="text-2xl" /></a>
                <a href={`mailto:ayomikunbolaji43@gmail.com`} target="_blank" className='cursor-pointer hover:text-gray-400'><SiGmail className="text-2xl" /></a>
            </ul>
           
             <Image src={assets.menuIcon} onClick={() => setShowMobileMenu(true)} className='w-7 cursor-pointer md:hidden font-bold bg-black' alt="menu icon"></Image>
        </div>

      {/* ------------------------ MOBILE MENU ---------------------------------- */}
       <div className={`md:hidden ${ showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} top-0 right-0 bottom-0 bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out z-20`}>
            <div className='flex justify-end p-6 cursor-pointer'> 
                <Image src={assets.crossIcon} onClick={() => setShowMobileMenu(false)} className='w-6' alt="cross icon"></Image>
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-[#03045E] text-lg font-semibold'>
                <a href={header} className='px-4 py-2 inline-block hover:bg-gray-200 ' onClick={() => setShowMobileMenu(false)}>Home</a>
                <a href={about} className='px-4 py-2 inline-block hover:bg-gray-200' onClick={() => setShowMobileMenu(false)}>About</a>
                <a href={works} className='px-4 py-2 inline-block hover:bg-gray-200' onClick={() => setShowMobileMenu(false)}>Works</a>
            </ul>
        </div>
    </header>
    </>
    
  )
}

export default NavBar;
