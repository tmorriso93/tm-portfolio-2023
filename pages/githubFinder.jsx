import React from 'react'
import githubFinder from '../public/assets/projects/github-finder.png'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const chatAi = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={githubFinder} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Github Finder</h2>
                <h3 className=''>React JS / Github API</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                Github finder application made with React & Tailwind. This app will Search the Github API and pull all user data, viewable in a responsive layout.
                </p>
                <button className='px-8 py-2 mt-4 mr-8'><a href="https://tmorriso-github-finder-app.vercel.app/" target="_blank" rel="noreferrer" >Demo</a></button>
                <button className='px-8 py-2 mt-4 mr-8'><a href="https://github.com/tmorriso93/tm-github-finder-app" target="_blank" rel="noreferrer" >Code</a></button>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> React</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> HTML</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Hooks</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> TAILWIND</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> JAVASCRIPT</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Github API</p>
                    </div>
                </div>
            </div>
            <Link href="/#projects">
                <p className='underline cursor-pointer'>Back</p>
            </Link>
        </div>
    </div>
  )
}

export default chatAi