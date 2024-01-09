// import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';
import ProjectItem from './ProjectItem';
import restaurant from '../public/assets/projects/restaurant02.png'
import ecomstore from '../public/assets/projects/ecomstore.png'
import landrover from '../public/assets/projects/landroversite001.png'
import bmw from '../public/assets/projects/bmwsite001.png'


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#db4b4b]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
 
            {/* <ProjectItem title="Feedback Application" backgroundImg={feedbackApp} projectUrl='/feedbackApp' /> */}
            {/* <ProjectItem title="Github Finder" backgroundImg={githubFinder} projectUrl='/githubFinder' /> */}
            <ProjectItem title="POLICARO BMW" backgroundImg={bmw} projectUrl='/bmw' />
            <ProjectItem title="Full Stack E-Commerce Store" backgroundImg={ecomstore} projectUrl='/ecomStore' />
            <ProjectItem title="Pizza Restaurant" backgroundImg={restaurant} projectUrl='/restaurant' />
            {/* <ProjectItem title="Keyword Extractor SAAS" backgroundImg={keywordEx} projectUrl='/keywordExtractor' /> */}
            <ProjectItem title="POLICARO LANDROVER" backgroundImg={landrover} projectUrl='/landrover' />
            

            </div>
        </div>
    </div>
  )
}

export default Projects