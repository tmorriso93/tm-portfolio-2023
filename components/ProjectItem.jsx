import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const ProjectItem = ({ title, backgroundImg, projectUrl, tech }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#db4b4b] to-[#d42828]'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 text-white text-center'>{tech}</p>
        <Link href={projectUrl}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-wait'>More Info</p>
        </Link>
    </div>
</div>
  )
}

export default ProjectItem