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
                Hello, I'm Tevin Morrison, a passionate Front End Developer based in Toronto, Canada. 
                With over 3 years of professional experience, I specialize in building modern, high-performing 
                websites and applications with a strong focus on seamless user experiences, using the power of React, 
                JavaScript, and other cutting-edge technologies.
                </p>
                <p className='py-2 text-gray-600'>
                Currently, I&rsquo;ve spent the past 2 years as a Web Developer at Policaro Group, where I manage 8 dealership 
                websites for prestigious automotive brands such as Porsche, BMW, Land Rover, and Lexus. These platforms 
                attract tens of thousands of visitors each month and play a key role in driving millions of dollars in 
                annual sales.
                </p>
                <p className='py-2 text-gray-600'>
                Beyond my work at Policaro, I&rsquo;ve also freelanced for 2 years, collaborating with small businesses, startups, 
                and nonprofit organizations to transform their digital ideas into engaging, functional products. This mix 
                of professional and freelance experience has sharpened my skills in crafting scalable solutions while 
                adapting to diverse client needs.
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