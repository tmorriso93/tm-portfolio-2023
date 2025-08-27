import React from 'react'
import skyMarkBanner from '../public/assets/projects/sky-mark-properties004.png'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const property = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={skyMarkBanner} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>SKY MARK PROPERTIES</h2>
                <h3 className=''>React JS / Tailwind / NextJS / Firebase / ShadUI</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <br />
                <p className='font-thin'>Click the Demo button below and log in to the admin account to test the create, update, and delete features.</p>
                <p className='font-thin'>Or create a new user login and just view listings without the ability to change anything.</p>
                <p><span className='font-bold pt-1'>Admin: skymarkadmin@maildepot.net Password: Ilovepizza1$</span></p>
                <br />
                <p>
                   Sky Mark Properties is a full-stack real estate web application built with Next.js and TypeScript, designed to provide a seamless platform for buying, selling, and managing 
                   property listings. The backend is powered by Firebase, which handles secure data storage, image hosting, and user authentication. To access the platform, users are required 
                   to create an account and log in, ensuring a personalized experience. Once logged in, users can explore listings, use advanced search and filtering tools to find homes by price 
                   range or number of rooms, and save favorite properties to a dedicated Favorites page for easy access later.
                </p>
                <br />
                <p>
                    The app features a forgot password flow, allowing users to securely reset their password via email if they&rsquo;ve forgotten their credentials. For administrators, there is a fully 
                    functional Admin Dashboard equipped with complete CRUD functionality, enabling them to create new property listings, update existing ones, or remove outdated entries. This ensures
                     that property data is always accurate and up to date.
                </p>
                <br />
                <p>
                    From a design perspective, Sky Mark Properties is styled with Tailwind CSS and ShadCN UI, delivering a sleek, responsive, and modern interface optimized for all devices. Form validation 
                    throughout the platform is handled with Zod, ensuring user input is clean, consistent, and error-free. By combining a secure authentication system, user-friendly design, robust admin tools, 
                    and powerful property search features, Sky Mark Properties demonstrates a strong balance between front-end development, backend integration, and practical real-world application in real 
                    estate technology.
                </p>

                <button className='px-8 py-2 mt-4 mr-8'><a href="https://sky-mark-properties.vercel.app/" target="_blank" rel="noreferrer" >Demo</a></button>
                <button className='px-8 py-2 mt-4 mr-8'><a href="https://github.com/tmorriso93/sky-mark-properties-001" target="_blank" rel="noreferrer" >Code</a></button>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> REACT</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> NEXTJS</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> TYPESCRIPT</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> TAILWINDCSS</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> SHADUI</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> FIREBASE</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> FIREBASE AUTH</p>
            
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