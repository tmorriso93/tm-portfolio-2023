import React from 'react'
import wordpilotai from '../public/assets/projects/wordpilotai-saas.png'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const bmw = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={wordpilotai} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>WORDPILOT AI</h2>
                <h3 className=''>NEXTJS FULLSTACK AI BLOG MAKER APP</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                    WordPilot AI is a fully functional full-stack web application that showcases my ability to design, build, and deploy modern, end-to-end software solutions. 
                    The app is built with Next.js for server-side rendering and routing, Tailwind CSS for responsive and modern UI design, and MongoDB for efficient data storage and management.
                     User authentication is handled securely using Clerk, allowing users to sign up, log in, and manage their content with a personalized dashboard. At its core, WordPilot AI uses OpenAI’s 
                     GPT-4o mini model to generate complete, SEO-optimized blog posts based on a user’s topic, brief description, and keywords. Users can easily create, view, and delete posts in a clean, 
                     user-friendly interface.
                </p>
                <br />
                <p>
                    This project highlights my proficiency in both front-end and back-end development, including API integration, authentication systems, AI implementation, database design, and UI/UX best practices. 
                    I built WordPilot AI from the ground up to demonstrate my ability to create scalable, production-ready applications that solve real-world problems. It reflects my strong understanding of modern web
                     technologies and frameworks, and it serves as a clear example of my readiness to contribute to a professional development team.
                </p>
                <button className='px-8 py-2 mt-4 mr-8'><a href="https://wordpilot-ai-fdpa.vercel.app/" target="_blank" rel="noreferrer" >Live Site</a></button>
                <button className='px-8 py-2 mt-4 mr-8'><a href="https://github.com/tmorriso93/wordpilot-ai" target="_blank" rel="noreferrer" >Code</a></button>
                
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> NEXTJS</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> MONGODB</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> TAILWINDCSS</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> CHATGPT API</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> CLERK AUTH API</p>
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

export default bmw