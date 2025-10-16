import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardReturn } from 'react-icons/md'

function Archive() {
  return (
    <div className='m-10'>
        <Link
        href="/"
        className='mb-5 flex items-center gap-2 text-gray-400 hover:text-white duration-150 ease-in-out cursor-pointer'>
            Return <MdKeyboardReturn />
        </Link>

        <div className="max-w-[1000px] mx-auto">
            <Table>
            <TableCaption className='mt-8'>An archive of my coding projects.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px] p-3">Year</TableHead>
                <TableHead className="w-[350px]">Title</TableHead>
                <TableHead className='hidden lg:block p-3'>Tags</TableHead>             
                <TableHead className="text-right p-3">Link</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>

                <TableRow>
                <TableCell className="text-gray-400 p-3">2025</TableCell>
                <TableCell>Cybersecurity Analysis Tool</TableCell>
                <TableCell className='hidden lg:block'>
                    <Badge variant="secondary" className='bg-green-500 text-black mr-1 mt-1'>Python</Badge>
                    <Badge variant="secondary" className='bg-green-800 mr-1'>Cybersecurity</Badge>   
                    <Badge variant="secondary">Scapy</Badge>
                </TableCell>
                <TableCell className="text-right text-gray-400 p-3">
                    <a
                    href="https://github.com/xanderyasruddin/cybersecurity-analysis-tool"
                    target="_blank"
                    className='hover:text-white duration-150 ease-in-out cursor-pointer'
                    >Github</a>
                </TableCell>
                </TableRow>

                <TableRow>
                <TableCell className="text-gray-400 p-3">2025</TableCell>
                <TableCell>Portfolio Website v.2</TableCell>
                <TableCell className='hidden lg:block'>
                    <Badge variant="secondary" className='bg-green-500 text-black mr-1 mt-1'>Next.js</Badge>
                    <Badge variant="secondary" className='bg-green-800 mr-1'>Website Design</Badge>
                    <Badge variant="secondary" className='mr-1'>HTML / CSS</Badge>
                    
                </TableCell>
                <TableCell className="text-right text-gray-400 p-3">
                    <a
                    href="https://xanderyas.com"
                    target="_blank"
                    className='hover:text-white duration-150 ease-in-out cursor-pointer'
                    >xanderyas.com</a>
                </TableCell>
                </TableRow>

                <TableRow>
                <TableCell className="text-gray-400 p-3">2025</TableCell>
                <TableCell>Echo - a Social Media Platform</TableCell>
                <TableCell className='hidden lg:block'>
                    <Badge variant="secondary" className='bg-green-500 text-black mr-1 mt-1'>Next.js</Badge>
                    <Badge variant="secondary" className='bg-green-800 mr-1'>Website Design</Badge>
                    <Badge variant="secondary" className='mr-1'>Full Stack</Badge>
                    <Badge variant="secondary" className='mr-1'>Neon Postgres</Badge>


                </TableCell>
                <TableCell className="text-right text-gray-400 p-3">
                </TableCell>
                </TableRow>

                <TableRow>
                <TableCell className="text-gray-400 p-3">2025</TableCell>
                <TableCell>ML Model Comparison: Stock Prediction</TableCell>
                <TableCell className='hidden lg:block'>
                    <Badge variant="secondary" className='bg-green-500 text-black mr-1 mt-1'>Python</Badge>
                    <Badge variant="secondary" className='bg-green-800 mr-1'>Machine Learning</Badge>   
                    <Badge variant="secondary" className='mr-1'>sklearn</Badge>
                    <Badge variant="secondary" className='mr-1'>Pandas</Badge>
                </TableCell>
                <TableCell className="text-right text-gray-400 p-3">
                    <a
                    href="https://github.com/xanderyasruddin/ml-stock-comparison"
                    target="_blank"
                    className='hover:text-white duration-150 ease-in-out cursor-pointer'
                    >Github</a>
                </TableCell>
                </TableRow>

                <TableRow>
                <TableCell className="text-gray-400 p-3">2024</TableCell>
                <TableCell>Stock Market Quoter / Newsletter</TableCell>
                <TableCell className='hidden lg:block'>
                    <Badge variant="secondary" className='bg-green-500 text-black mr-1 mt-1'>Python</Badge>
                    <Badge variant="secondary" className='bg-green-800 mr-1'>Finance</Badge>
                    <Badge variant="secondary" className='mr-1'>yFinance</Badge>
                </TableCell>
                <TableCell className="text-right text-gray-400 p-3">
                </TableCell>
                </TableRow>

                <TableRow>
                <TableCell className="text-gray-400 p-3">2024</TableCell>
                <TableCell>Future Garage Website</TableCell>
                <TableCell className='hidden lg:block'>
                    <Badge variant="secondary" className='bg-green-500 text-black mr-1 mt-1'>React.js</Badge>
                    <Badge variant="secondary" className='bg-green-800 mr-1'>Website Design</Badge>   
                    <Badge variant="secondary">Framer Motion</Badge>
                </TableCell>
                <TableCell className="text-right text-gray-400 p-3">
                    <a
                    href="https://github.com/xanderyasruddin/future-garage-website"
                    target="_blank"
                    className='hover:text-white duration-150 ease-in-out cursor-pointer'
                    >Github</a>
                </TableCell>
                </TableRow>

                <TableRow>
                <TableCell className="text-gray-400 p-3">2023</TableCell>
                <TableCell>Portfolio Website v.1</TableCell>
                <TableCell className='hidden lg:block'>
                    <Badge variant="secondary" className='bg-green-500 text-black mr-1 mt-1'>React.js</Badge>
                    <Badge variant="secondary" className='bg-green-800 mr-1'>Website Design</Badge>   
                    <Badge variant="secondary">Framer Motion</Badge>
                </TableCell>
                <TableCell className="text-right text-gray-400 p-3">
                    <a
                    href="https://github.com/xanderyasruddin/portfolio-website-v.1"
                    target="_blank"
                    className='hover:text-white duration-150 ease-in-out cursor-pointer'
                    >Github</a>
                </TableCell>
                </TableRow>

                <TableRow>
                <TableCell className="text-gray-400 p-3">2023</TableCell>
                <TableCell>Pomodoro Timer</TableCell>
                <TableCell className='hidden lg:block'>
                    <Badge variant="secondary" className='bg-green-500 text-black mr-1 mt-1'>Python</Badge>
                    <Badge variant="secondary" className='bg-green-800 mr-1'>Utility</Badge>   
                    <Badge variant="secondary">Tkinter</Badge>
                </TableCell>
                <TableCell className="text-right text-gray-400 p-3">
                    <a
                    href="https://github.com/xanderyasruddin/pomodoro-timer"
                    target="_blank"
                    className='hover:text-white duration-150 ease-in-out cursor-pointer'
                    >Github</a>
                </TableCell>
                </TableRow>

                <TableRow>
                <TableCell className="text-gray-400 p-3">2023</TableCell>
                <TableCell>Roman Numeral Converter</TableCell>
                <TableCell className='hidden lg:block'>
                    <Badge variant="secondary" className='bg-green-500 text-black mr-1 mt-1'>Python</Badge>
                    <Badge variant="secondary" className='bg-green-800 mr-1'>Utility</Badge>   

                </TableCell>
                <TableCell className="text-right text-gray-400 p-3">
                    <a
                    href="https://github.com/xanderyasruddin/roman-num-converter"
                    target="_blank"
                    className='hover:text-white duration-150 ease-in-out cursor-pointer'
                    >Github</a>
                </TableCell>
                </TableRow>

                <TableRow>
                <TableCell className="text-gray-400 p-3">2023</TableCell>
                <TableCell>UK Tax Calculator</TableCell>
                <TableCell className='hidden lg:block'>
                    <Badge variant="secondary" className='bg-green-500 text-black mr-1 mt-1'>Python</Badge>
                    <Badge variant="secondary" className='bg-green-800 mr-1'>Finance</Badge>   
                    <Badge variant="secondary">OOP</Badge>
                </TableCell>
                <TableCell className="text-right text-gray-400 p-3">
                </TableCell>
                </TableRow>

            </TableBody>
            </Table>
        </div>
    </div>
  )
}

export default Archive