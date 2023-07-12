import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectItem from './ProjectItem';
import bankImg from '../public/assets/projects/modern-bank.png'
import githubFinder from '../public/assets/projects/github-finder.png'
import ecomstore from '../public/assets/projects/ecomstore.png'
import keywordEx from '../public/assets/projects/keywordExtractor.png'


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#db4b4b]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

            {/* <ProjectItem title="Feedback Application" backgroundImg={feedbackApp} projectUrl='/feedbackApp' /> */}
            <ProjectItem title="Github Finder" backgroundImg={githubFinder} projectUrl='/githubFinder' />
            <ProjectItem title="Full Stack E-Commerce Store" backgroundImg={ecomstore} projectUrl='/ecomStore' />
            <ProjectItem title="Modern Bank Landing Page" backgroundImg={bankImg} projectUrl='/modernBank' />
            <ProjectItem title="Keyword Extractor SAAS" backgroundImg={keywordEx} projectUrl='/keywordExtractor' />
            

            </div>
        </div>
    </div>
  )
}

export default Projects