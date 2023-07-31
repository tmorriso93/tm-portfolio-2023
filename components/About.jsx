import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import folioImg from "../public/assets/projects/folioImg.png"

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#db4b4b]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>
                Hello, I'm Tevin Morrison, a passionate Front End Developer hailing from Toronto, Canada. With a strong focus on crafting seamless and engaging user experiences,
                 I specialize in building cutting-edge websites and applications using the power of React and Javascript. As a seasoned Freelancer, I've dedicated the last 3 years
                  to honing my skills and collaborating with a diverse range of clients, including small businesses, startups, and nonprofit organizations, to bring their digital visions to life.
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
                   
                    src={folioImg}
                    alt="Profile Picture" 
                />
            </div>
        </div>
    </div>
  )
}

export default About