"use client";

import React from 'react'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'
import { Element } from "react-scroll";
import Footer from './Footer';

function Main() {
  return (
  <div>
    <div className='flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center max-w-[700] lg:space-y-32'>
        <Element name="About"><About/></Element>
        <Element name="Projects"><Projects /></Element>
        <Element name="Experience"><Experience /></Element>
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default Main