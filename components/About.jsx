import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import laptopoutside from '../public/assets/projects/laptopoutside.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#db4b4b]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>
                    I'm Tevin Morrison from Toronto, Canada. I specialize in building websites and applications using Front End Technologies
                    like React & Javascript. I work as a Freelance front end developer, and have been doing so for the past 2 years. My clients
                    have included small businesses, startups, and nonprofit organizations.
                </p>
                <Link href="/#projects">
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my projects</p>
                </Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image 
                    className='rounded-xl' 
                    // src="https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    // width="367"
                   
                    src={laptopoutside}
                    alt="laptop on table" 
                />
            </div>
        </div>
    </div>
  )
}

export default About