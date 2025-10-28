import React from 'react'
import { Separator } from './ui/separator'
import { Badge } from './ui/badge'
import { FaFolder , FaFolderOpen } from "react-icons/fa";
import Link from 'next/link';


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
                        <img src='./cyberml.png'
                        className='rounded h-20 w-36'
                        />
                        <div className='flex flex-col ml-5'>
                            <h1 className='text-lg font-bold'>ML Network Attack Detector</h1>
                            <p className='text-sm text-muted-foreground'>Built a machine learning model that detects 
                                network attacks using Random Forest Classification on KDD99 data with 99% accuracy, 
                                improving from a previous 33% accurate model.</p>
                                <div className='flex flex-row flex-wrap mt-3 gap-3'>
                                <Badge variant="secondary" className='bg-green-500 text-black'>Python</Badge>
                                <Badge variant="secondary" className='bg-green-800 '>Machine Learning</Badge>
                                <Badge variant="secondary" className='bg-green-800 '>Cybersecurity</Badge>
                                <Badge variant="secondary">sklearn</Badge>
                                <Badge variant="secondary">Pandas</Badge>    
                            </div>  
                        </div>
                    </div>
            </div>

            <div className='w-full p-5 rounded hover:bg-neutral-800 hover:shadow-2xl duration-150'>
                    <div className='flex flex-row'>
                        <img src='./cybertool.png'
                        className='rounded h-20 w-36'
                        />
                        <div className='flex flex-col ml-5'>
                            <h1 className='text-lg font-bold'>Cybersecurity Analysis Tool</h1>
                            <p className='text-sm text-muted-foreground'>Built a network packet sniffer using protocol parsing
                                to analyse network traffic, detecting anomalies and revealing any potential security vulnerabilities.
                            </p>
                                <div className='flex flex-row flex-wrap mt-3 gap-3'>
                                <Badge variant="secondary" className='bg-green-500 text-black'>Python</Badge>
                                <Badge variant="secondary" className='bg-green-800'>Cybersecurity</Badge>   
                                <Badge variant="secondary">Scapy</Badge>
                            </div>  
                        </div>
                        
                    </div>
            </div>

            <div className='w-full p-5 rounded hover:bg-neutral-800 hover:shadow-2xl duration-150'>
                    <div className='flex flex-row'>
                        <img src='./echo screenshot.png'
                        className='rounded h-20 w-36'
                        />
                        <div className='flex flex-col ml-5'>
                            <h1 className='text-lg font-bold'>Echo - a Social Media Platform</h1>
                            <p className='text-sm text-muted-foreground'>Developed a full-stack social media website about reviewing locations
                                using Next.js and Prisma ORM, implementing database schemas, 
                                server-side logic, and a responsive UI.</p>
                            <div className='flex flex-row flex-wrap mt-3 gap-3'>
                                <Badge variant="secondary" className='bg-green-500 text-black'>Next.js</Badge>
                                <Badge variant="secondary" className='bg-green-800'>Website Design</Badge>
                                <Badge variant="secondary">Full Stack</Badge>   
                                <Badge variant="secondary">Neon Postgres</Badge>   
                                <Badge variant="secondary">Clerk</Badge>      
                            </div>      
                        </div>
                    </div>
            </div>

            <div className='w-full p-5 rounded hover:bg-neutral-800 hover:shadow-2xl duration-150'>
                    <div className='flex flex-row'>
                        <img src='./stockGraph.png'
                        className='rounded h-20 w-36'
                        />
                        <div className='flex flex-col ml-5'>
                            <h1 className='text-lg font-bold'>ML Model Comparison: Stock Prediction</h1>
                            <p className='text-sm text-muted-foreground'>Compared the accuracy of two supervised learning models,
                                Support Vector Classifier and Random Forest, using features such as closing price, 7-day SMA and 30-day volatility.
                            </p>
                                <div className='flex flex-row flex-wrap mt-3 gap-3'>
                                <Badge variant="secondary" className='bg-green-500 text-black'>Python</Badge>
                                <Badge variant="secondary" className='bg-green-800'>Machine Learning</Badge>
                                <Badge variant="secondary">sklearn</Badge>   
                                <Badge variant="secondary">Pandas</Badge>    
                            </div>  
                        </div>
                        
                    </div>
            </div>

            <Link
            href="/archive"
            className="w-full p-5 rounded text-gray-400 hover:text-white hover:font-bold duration-150 ease-in-out cursor-pointer flex items-center gap-2 group">
            Project Archive
                <span className='group-hover:hidden duration-150 ease-in-out'>
                    <FaFolder />
                </span>
                <span className='hidden group-hover:inline duration-150 ease-in-out'>
                    <FaFolderOpen />
                </span>
            </Link>
        </div>
    </div>
  )
}

export default Projects