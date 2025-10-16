import React from 'react'
import { Separator } from './ui/separator'

function About() {
  return (
    <div>
      <div className='block lg:hidden'>
          <div className='mx-auto w-full mb-8'>
              <Separator/>
          </div>
          <div className='mb-5 text-xl font-bold'>
              ABOUT
          </div>
        </div>
        <div className='lg:mt-35 text-gray-400'>
        A junior developer who’s passionate about building user-focused software. 
        My interests lie in software engineering, machine learning, and web development.
        </div>
        <div className='mt-5 text-gray-400'>
        Currently, I’m a Computer Science graduate from <span className='text-white hover:text-green-400 duration-200'>
          <a href='https://www.qmul.ac.uk/postgraduate/taught/coursefinder/courses/computer-science-conversion-msc/' 
          target='_noblank'>Queen Mary University of London</a>
          </span> 

        , where I built a strong foundation of information systems, from 
        computer architecture to system design to the ethics of AI.
        </div>
        <div className='mt-5 text-gray-400'>
        Previously, I’ve built my projects predominantly in Python, but I’ve recently 
        expanded my front-end and full-stack skills through projects built with Next.js, 
        Tailwind CSS, Prisma, Neon, and shadcn/ui. This development stems from my dissertation 
        project at university to the passion projects I pick up to learn and practice 
        new skills. I’ve also founded and managed my own gaming community based on the 
        Java-coded game <span className='text-white hover:text-green-400 duration-200'>
          <a href='https://www.minecraft.net/en-us' 
          target='_noblank'>Minecraft</a>
          </span>, gaining hands-on experience in backend development, 
        business finances, and managing a team.
        </div>
        <div className='mt-5 text-gray-400'>
        Outside of tech, I have a creative background in music, dance, and fashion, 
        where I earnt a Grade 8 distinction in trumpet at 14 years old and toured the 
        south of England with the Essex Dance Theatre.
        </div>
    </div>
  )
}

export default About