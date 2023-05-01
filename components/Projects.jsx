import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectItem from './ProjectItem';
import chataiImg from '../public/assets/projects/chat-ai00.png'
import bankImg from '../public/assets/projects/modern-bank.png'
import aiImgGen from '../public/assets/projects/ai-img-generator.png'
import brazilBlog from '../public/assets/projects/blog-site.png'
import feedbackApp from '../public/assets/projects/feedback-app.png'
import githubFinder from '../public/assets/projects/github-finder.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#db4b4b]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

            <ProjectItem title="Feedback Application" backgroundImg={feedbackApp} projectUrl='/feedbackApp' />
            <ProjectItem title="Fullstack Blog Application" backgroundImg={brazilBlog} projectUrl='/brazilBlog' />
            {/* <ProjectItem title="Chat Artificial Intelligence " backgroundImg={chataiImg} projectUrl='/chatAi' /> */}
            <ProjectItem title="Github Finder" backgroundImg={githubFinder} projectUrl='/githubFinder' />
            <ProjectItem title="Modern Bank Landing Page" backgroundImg={bankImg} projectUrl='/modernBank' />
            <ProjectItem title="Artificial Intelligence Image Generator" backgroundImg={aiImgGen} projectUrl='/imgGenerator' />
            

            </div>
        </div>
    </div>
  )
}

export default Projects