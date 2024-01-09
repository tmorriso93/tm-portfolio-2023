import React from 'react'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
// import keywordEx from '../public/assets/projects/keywordExtractor.png'
import landroverImg from '../public/assets/projects/landroversite001.png'

const landrover = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={landroverImg} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>LANDROVER CAR DEALERSHIP</h2>
                <h3 className=''>WORDPRESS | POLICARO LANDROVER CAR DEALERSHIP</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                I am the sole developer for Policaro Landrover car dealership's website. Within the Policaro Group, I manage eight websites for various car dealerships in Ontario, Canada. This specific website is constructed using the WordPress CMS.
                 I collaborate with the marketing and graphics team to ensure the maintenance, updates, and modifications meet the needs of our customers in the province.
                 Daily, I add new web pages and incorporate sales and monthly initiatives onto the site.
                </p>
                <button className='px-8 py-2 mt-4 mr-8'><a href="https://www.landroverwaterloo.com/" target='_blank' rel="noreferrer" >Live Site</a></button>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> WORDPRESS</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> JAVASCRIPT</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> HTML</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> CSS</p>

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

export default landrover