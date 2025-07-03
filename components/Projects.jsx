// import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';
import ProjectItem from './ProjectItem';
import restaurant from '../public/assets/projects/restaurant02.png'
import wordpilotai from '../public/assets/projects/wordpilotai-saas.png';
import landrover from '../public/assets/projects/landroversite001.png'
import bmw from '../public/assets/projects/bmwsite001.png'


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#db4b4b]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
 
            <ProjectItem title="WORDPILOT AI" tech="FULLSTACK APP BUILT WITH NEXTJS" backgroundImg={wordpilotai} projectUrl='/wordpilotai' />
            <ProjectItem title="POLICARO BMW" tech="BUILT WITH WORDPRESS" backgroundImg={bmw} projectUrl='/bmw' />
            <ProjectItem title="Pizza Restaurant" tech="BUILT WITH HTML & CSS" backgroundImg={restaurant} projectUrl='/restaurant' />
            {/* <ProjectItem title="POLICARO LANDROVER" tech="BUILT WITH WORDPRESS" backgroundImg={landrover} projectUrl='/landrover' /> */}
            

            </div>
        </div>
    </div>
  )
}

export default Projects