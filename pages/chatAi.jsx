import React from 'react'
import chataiImg from '../public/assets/projects/chat-ai00.png'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const chatAi = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={chataiImg} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Chat AI</h2>
                <h3 className=''>React JS / OpenAI API</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                {/* <p>A ChatGPT AI Application</p> */}
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                ChatGPT interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate
                requests. ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response.
                This user interface resembles the ChatGPT app. You Communicate with an advanced GPT 3 model API, and have the ability to ask to the AI for help with coding and problem solving in many programming languages.
                </p>
                <button className='px-8 py-2 mt-4 mr-8'><a href="https://codex-chat-ai-tmorriso.vercel.app/" target="_blank">Demo</a></button>
                <button className='px-8 py-2 mt-4 mr-8'><a href="https://github.com/tmorriso93/codex" target="_blank">Code</a></button>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> React</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> HTML</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> CSS</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> TAILWIND</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> JAVASCRIPT</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> NODEJS</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Open AI API</p>
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

export default chatAi