import React from 'react'
import { Separator } from './ui/separator'
import { Badge } from './ui/badge'

function Experience() {
  return (
    <div>
        <div className='block lg:hidden mx-auto w-full my-8'>
            <Separator/>
        </div>
        <div className='block my-5 text-xl font-bold lg:hidden'>
            EXPERIENCE
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
            <div className='w-full p-5 rounded hover:bg-neutral-800 hover:shadow-2xl duration-150'>
                        <div className='flex flex-row'>
                            <div className='text-sm pt-1 rounded h-20 w-36 whitespace-nowrap text-muted-foreground'>
                                June-Dec 21
                            </div>
                            <div className='flex flex-col ml-9'>
                                <h1 className='text-lg font-bold'>Owner & Developer <span className='font-normal'>at</span> AnimeCloud</h1>
                                <p className='text-sm text-muted-foreground'>Designed and built a website, collaborated with
                                    a professional Java developer to create a custom plug-in based on the anime Attack on Titan,
                                     implementing swing-motion ODM gear and handled backend development. Managed a team, finances 
                                     and advertising on social media.
                                </p>
                                <div className='flex flex-row flex-wrap mt-3 gap-3'>
                                    <Badge variant="secondary" className='bg-green-800'>Entrepreneurship</Badge>
                                    <Badge variant="secondary" className='bg-green-800'>Website Development</Badge>
                                    <Badge variant="secondary">Java</Badge> 
                                    <Badge variant="secondary">Game Design</Badge>
                                    <Badge variant="secondary">Management</Badge>
                                    <Badge variant="secondary">Economics</Badge>
                                    
    
                                </div>      
                            </div>
                        </div>
            </div>

            <div className='w-full p-5 rounded hover:bg-neutral-800 hover:shadow-2xl duration-150'>
                        <div className='flex flex-row'>
                            <div className='text-sm pt-1 rounded h-20 w-36 whitespace-nowrap text-muted-foreground'>
                                Nov 20-Apr 21
                            </div>
                            <div className='flex flex-col ml-5'>
                                <h1 className='text-lg font-bold'>Plug-In & Config Manager <span className='font-normal'>at</span> AvatarcraftMC</h1>
                                <p className='text-sm text-muted-foreground'>Managed and configured Minecraft server plug-ins,
                                    implementing feature changes based on staff direction and player feedback. Collaborated with 
                                    backend developers to support server maintenence and stability checks. 
                                    server-side logic, and a responsive UI.</p>
                                <div className='flex flex-row flex-wrap mt-3 gap-3'>
                                    <Badge variant="secondary" className='bg-green-800'>Management</Badge>
                                    <Badge variant="secondary">Java</Badge>   
    
                                </div>      
                            </div>
                        </div>
            </div>

            <div className='w-full p-5 rounded hover:bg-neutral-800 hover:shadow-2xl duration-150'>
                        <div className='flex flex-row'>
                            <div className='text-sm pt-1 rounded h-20 w-36 whitespace-nowrap text-muted-foreground'>
                                Aug-Oct 19
                            </div>
                            <div className='flex flex-col ml-11.5'>
                                <h1 className='text-lg font-bold'>Law & Finance Intern <span className='font-normal'>at</span> Freshfields Bruckhaus Deringer</h1>
                                <p className='text-sm text-muted-foreground'>Collaborated on a bribery case study, interviewing 
                                    clients and presenting findings to a CEO. Shadowed senior lawyers and finance professionals, 
                                    aided in data organization and analysis using Excel and Invited back to shadow the finance 
                                    department after internship completion</p>
                                <div className='flex flex-row flex-wrap mt-3 gap-3'>
                                    <Badge variant="secondary" className='bg-green-800'>Law</Badge>
                                    <Badge variant="secondary" className='bg-green-800'>Finance</Badge>
                                    <Badge variant="secondary">Networking</Badge>
                                </div>      
                            </div>
                        </div>
            </div>
        </div>
        <div className='block lg:hidden mx-auto w-full my-8'>
            <Separator/>
        </div>
    </div>
  )
}

export default Experience