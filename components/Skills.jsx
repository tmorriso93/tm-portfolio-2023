import Image from 'next/image'
import React from 'react'
import htmlLogo from '../public/assets/skills/html-5.png'
import cssLogo from '../public/assets/skills/css-3.png'
import jsLogo from '../public/assets/skills/js.png'
import reactLogo from '../public/assets/skills/physics.png'
import nodeLogo from '../public/assets/skills/nodejs.png'
import mysqlLogo from '../public/assets/skills/mysql.png'
import figmaLogo from '../public/assets/skills/figma.png'
import gitLogo from '../public/assets/skills/git.png'
import bsLogo from '../public/assets/skills/bootstrap.png'
import nextLogo from '../public/assets/skills/nextlogo00.png'
import mongodb from '../public/assets/skills/mongodb001.png'


const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#db4b4b]'>Skills</p>
            <h2 className='py-4'>What I can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                // src='/../public/assets/skills/html-5.png' 
                                src={htmlLogo}
                                alt='html logo' 
                                width='45' 
                                height='45' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                // src='/../public/assets/skills/css-3.png' 
                                src={cssLogo}
                                alt='css logo' 
                                width='45' 
                                height='45' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                // src='/../public/assets/skills/js.png' 
                                src={jsLogo}
                                alt='javascript logo' 
                                width='45' 
                                height='45' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JAVASCRIPT</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                // src='/../public/assets/skills/physics.png' 
                                src={reactLogo}
                                alt='react logo' 
                                width='45' 
                                height='45' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>REACT</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                // src='/../public/assets/skills/physics.png' 
                                src={nextLogo}
                                alt='react logo' 
                                width='55' 
                                height='55' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NEXTJS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                // src='/../public/assets/skills/nodejs.png' 
                                src={nodeLogo}
                                alt='nodejs logo' 
                                width='45' 
                                height='45' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NODEJS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                // src='/../public/assets/skills/mysql.png' 
                                src={mysqlLogo}
                                alt='mysql logo' 
                                width='45' 
                                height='45' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MYSQL</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                // src='/../public/assets/skills/bootstrap.png' 
                                src={bsLogo}
                                alt='bootstrap logo' 
                                width='45' 
                                height='45' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>BOOTSTRAP</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                // src='/../public/assets/skills/figma.png' 
                                src={figmaLogo}
                                alt='figma logo' 
                                width='45' 
                                height='45' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>FIGMA</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                // src='/../public/assets/skills/git.png' 
                                src={gitLogo}
                                alt='github logo' 
                                width='45' 
                                height='45' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>GIT</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                               
                                src={mongodb}
                                alt='github logo' 
                                width='60' 
                                height='60' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MONGODB</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills