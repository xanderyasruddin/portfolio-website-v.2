import React from 'react'
import { Separator } from './ui/separator'
import { Badge } from './ui/badge'

function Projects() {
  return (
    <div>
        <div className='block lg:hidden'>
            <div className='mx-auto w-full my-8'>
                <Separator/>
            </div>
            <div className='my-5 text-xl font-bold'>
                PROJECTS
            </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>

            <div className='w-full p-5 rounded hover:bg-neutral-800 hover:shadow-2xl duration-150'>
                    <div className='flex flex-row'>
                        <img src='./echo screenshot.png'
                        className='rounded h-20 w-36'
                        />
                        <div className='flex flex-col ml-5'>
                            <h1 className='text-lg font-bold'>Echo - a Social Media Platform</h1>
                            <p className='text-sm text-muted-foreground'>Developed a full-stack social media platform about reviewing locations
                                using Next.js and Prisma ORM, implementing database schemas, 
                                server-side logic, and a responsive UI.</p>
                            <div className='flex flex-row flex-wrap mt-3 gap-3'>
                                <Badge variant="secondary" className='bg-green-800'>Next.js</Badge>
                                <Badge variant="secondary">Tailwind CSS</Badge>   
                                <Badge variant="secondary">Neon Database</Badge>   
                                <Badge variant="secondary">shadcn/ui</Badge>      
                            </div>      
                        </div>
                    </div>
            </div>

            <div className='w-full p-5 rounded hover:bg-neutral-800 hover:shadow-2xl duration-150'>
                    <div className='flex flex-row'>
                        <img src='./404.png'
                        className='rounded h-20 w-36'
                        />
                        <div className='flex flex-col ml-5'>
                            <h1 className='text-lg font-bold'>Stock Market Quoter</h1>
                            <p className='text-sm text-muted-foreground'>Developed a GUI application that takes stocks as input 
                                and returns financial information, such as stock price changes and the highs and lows of the 
                                trading day, using APIs and further practicing my use of Tkinter and OOP.</p>
                                <div className='flex flex-row flex-wrap mt-3 gap-3'>
                                <Badge variant="secondary" className='bg-green-800'>Python</Badge>
                                <Badge variant="secondary">Tkinter</Badge>   
                                <Badge variant="secondary">yFinance</Badge>    
                            </div>  
                        </div>
                        
                    </div>
            </div>

            <div className='w-full p-5 rounded hover:bg-neutral-800 hover:shadow-2xl duration-150'>
                    <div className='flex flex-row'>
                        <img src='./animecloud website.png'
                        className='rounded h-20 w-36'
                        />
                        <div className='flex flex-col ml-5'>
                            <h1 className='text-lg font-bold'>AnimeCloud</h1>
                            <p className='text-sm text-muted-foreground'>Designed a website for general information and in-game
                                purchases. Configured and developed a public Minecraft server based on the popular anime, Attack on Titan.</p>
                                <div className='flex flex-row flex-wrap mt-3 gap-3'>
                                <Badge variant="secondary" className='bg-green-800'>Javascript</Badge>
                                <Badge variant="secondary" className='bg-green-800'>HTML</Badge>
                                <Badge variant="secondary" className='bg-green-800'>CSS</Badge>
                                <Badge variant="secondary">Java</Badge>
                                <Badge variant="secondary">Game Design</Badge>

                            </div>  
                        </div>
                    </div>
            </div>

            <div className='w-full p-5 rounded hover:bg-neutral-800 hover:shadow-2xl duration-150'>
                    <div className='flex flex-row'>
                        <img src='./website v1.png'
                        className='rounded h-20 w-36'
                        />
                        <div className='flex flex-col ml-5'>
                            <h1 className='text-lg font-bold'>Portfolio Website v.1</h1>
                            <p className='text-sm text-muted-foreground'>Created a website with React.js, 
                                utilising third-party libraries like Framer Motion to create visually 
                                appealing animation, to showcase my projects and credentials.</p>
                                <div className='flex flex-row flex-wrap mt-3 gap-3'>
                                <Badge variant="secondary" className='bg-green-800'>React.js</Badge>
                                <Badge variant="secondary">Framer Motion</Badge>       
                            </div>  
                        </div>
                    </div>
            </div>


        </div>
    </div>
  )
}

export default Projects