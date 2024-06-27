import React from 'react'
import {motion} from 'framer-motion'
import { PaperPlaneIcon, Pencil2Icon } from '@radix-ui/react-icons'
import { FaPaperPlane } from "react-icons/fa";
import { BsDatabase } from 'react-icons/bs';
import { GiPowerGenerator } from "react-icons/gi";
import { GrGrid } from 'react-icons/gr';
import { IoMdPaper } from "react-icons/io";
import Image from 'next/image';
import arrow from '@/public/066 (1).png'

const Overview = () => {
  return (
    <section  className="overflow-hidden relative w-full  bg-[#0D0E12] bg-gradient-to-b from-blue-900/30 via-[#0D0E12] to-[#0D0E12] text-white">
        <div className='absolute -left-3 top-[50%]  '>
            <FaPaperPlane className=' text-8xl text-[#1B1D20] hidden sm:block'/>
        </div>
        <div className='absolute -right-3  -rotate-45 top-[50%] '>
            <IoMdPaper className='text-8xl text-[#1B1D20] hidden sm:block'/>
        </div>
        <motion.div className=" max-w-[1200px] mx-auto text-center py-20" initial={{opacity: 0, y: 8}} animate={{opacity: 1, y: 0}} transition={{ease: 'easeInOut', duration: 0.45}}>
          <p className="font-bold text-2xl text-blue-500">Service overview</p>
          <p className="text-4xl px-4 lg:text-6xl tracking-wide py-4">We keep track of your content</p>

          <div className="grid grid-cols-1 place-items-center lg:grid-cols-3 grid-rows-3 place-content-center text-start gap-4 py-28 mx-au">
            <div className="hidden lg:block">
            </div>
            <div className="md:w-[300px] md:h-[300px] mx-auto">
                <GrGrid className='w-[40%] sm:w-[80%] h-full text-[#1B1D20] mx-auto'/>
                <div className="text-[#dcdcdc]  hover:text-white cursor-pointer py-2 block text-xs md:hidden">
                  <div className="bg-gray-500/10  max-w-max px-3 py-2 rounded-full mx-auto">
                    <p>studio</p>
                   </div>
                  <p className="pt-4">Your own personalized space where all your content is saved.</p>
                </div>
            </div>
            <div className="hidden lg:block ">
              <div className="text-[#dcdcdc] hover:text-white cursor-pointer">
                <div className="bg-gray-500/10  max-w-max px-3 py-2 rounded-full">
                  <p>studio</p>
                </div>
                <p className="pt-4">Your own personalized space where all your content is saved.</p>
              </div>
            </div>
            <div className="text-end hidden lg:block">
              <div className="text-[#dcdcdc]  hover:text-white cursor-pointer">
                <div className="bg-gray-500/10  max-w-max px-3 py-2 rounded-full ml-auto">
                  <p>Database</p>
                </div>
                <p className="pt-4">We keep your data on our database in the cloud so you can create your invoices on the go on any of your devices</p>
              </div>
            </div>
            <div className="md:w-[300px] md:h-[300px] flex flex-col text-center  mx-auto">
                <BsDatabase className='w-[40%] md:w-[80%] h-full text-[#1B1D20] mx-auto'/>
                <div className="text-[#dcdcdc]  hover:text-white cursor-pointer py-2 block text-xs sm:hidden">
                  <div className="bg-gray-500/10  max-w-max px-3 py-2 rounded-full mx-auto">
                    <p>Database</p>
                   </div>
                  <p className="pt-4">We keep your data on our database in the cloud so you can create your invoices on the go on any of your devices</p>
                </div>
            </div>
            <div className="hidden lg:block">

            </div>
            <div className="hidden lg:block">

            </div>
             
            <div className="md:w-[300px] md:h-[300px] mx-auto">
                <GiPowerGenerator className='w-[60%] md:w-[80%] mx-auto h-full text-[#1B1D20]'/>
                <div className="text-[#dcdcdc]  hover:text-white cursor-pointer py-2 block text-center text-xs sm:hidden">
                  <div className="bg-gray-500/10  max-w-max px-3 py-2 rounded-full mx-auto">
                    <p>Generator</p>
                   </div>
                  <p className="pt-4">Generate your invoices super fast wherever you are.</p>
                </div>
            </div>
            <div className="hidden lg:block ">
              <div className="text-[#dcdcdc] hover:text-white cursor-pointer">
                <div className="bg-gray-500/10  max-w-max px-3 py-2 rounded-full">
                  <p>Generator</p>
                </div>
                <p className="pt-4">Generate your invoices super fast wherever you are</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
  )
}

export default Overview
