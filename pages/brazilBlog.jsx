import React from 'react'
import imgHolder from '../public/assets/projects/img-holder00.webp'
import brazilBlog from '../public/assets/projects/blog-site.png'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const property = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={brazilBlog} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Brazil Travel Blog</h2>
                <h3 className=''>React JS / Tailwind / Sanity IO</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                   This project is a Blog about Brazil and some of the best places to visit while in the country. It's made with React and Tailwind on the front end and Sanity IO on the back end for my database and storage.
                   This is a Full Stack application that's fully responsive and looks great on all devices. Each Blog post lets you know who wrote it and the time and date it was posted.
                </p>
                <button className='px-8 py-2 mt-4 mr-8'><a href="https://tmorrisosanityblog.netlify.app/" target="_blank">Demo</a></button>
                <button className='px-8 py-2 mt-4 mr-8'><a href="https://github.com/tmorriso93/tm-portfolio-2023" target="_blank">Code</a></button>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> REACT</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> TAILWIND</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> JAVASCRIPT</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> SANITY IO</p>
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

export default property