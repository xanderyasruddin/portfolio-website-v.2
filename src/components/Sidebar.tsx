"use client";

import React from 'react';
import { Github, Linkedin } from "@deemlol/next-icons";
import { Link } from 'react-scroll';

function Sidebar() {
  return (
    <div className='w-full mt-20 lg:mt-50'>
        <div className='flex flex-row justify-center items-center'>
            <div className='flex flex-col space-y-2'>
                <p className='text-md'>Hey, my name is</p>

                <Link to="About" smooth={true} duration={500} spy={true}
                    className='text-4xl md:text-5xl lg:text-3xl font-bold mt-2 hover:text-green-400 duration-150 ease-in-out cursor-pointer'>Alexander Yasruddin</Link>
                <p className='text-sm text-gray-400'>London-based Software Engineer</p>
                <div className='flex flex-row mt-4 ml-1 space-x-3'>
                    <a 
                    href="https://www.linkedin.com/in/xanderyasruddin/"
                    target="_blank"
                    className='text-gray-400 hover:text-white duration-150 ease-in-out'>
                        <Linkedin />
                    </a>
                    <a 
                    href="https://github.com/xanderyasruddin"
                    target="_blank"
                    className='text-gray-400 hover:text-white duration-150 ease-in-out'>
                        <Github />
                    </a>
                    {/* <a
                    href="/Alexander Yasruddin CV.pdf"
                    target="_blank"
                    className='text-gray-400 hover:text-white duration-150 ease-in-out border-2 rounded px-1 -mt-0.5'
                    >
                        Resume
                    </a> */}
                </div>
                <div className='hidden mt-10 lg:flex lg:flex-col lg:space-y-2'>
                    <Link to="About" smooth={true} duration={500} spy={true} offset={-50}
                    activeClass='font-bold text-white'
                    className='text-gray-400 hover:text-white hover:font-bold duration-150 ease-in-out cursor-pointer'>About</Link>

                    <Link to="Projects" smooth={true} duration={500} spy={true} offset={-60}
                    activeClass='font-bold text-white'
                    className='text-gray-400 hover:text-white hover:font-bold duration-150 ease-in-out cursor-pointer'>Projects</Link>

                    <Link to="Experience" smooth={true} duration={500} spy={true} offset={-70}
                    activeClass='font-bold text-white'
                    className='text-gray-400 hover:text-white hover:font-bold duration-150 ease-in-out cursor-pointer'>Experience</Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Sidebar