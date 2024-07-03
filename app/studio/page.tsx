import { ContainerIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'
import { BsBell, BsBellFill, BsBox } from 'react-icons/bs'
import { CgChart } from 'react-icons/cg'
import { GrPrevious } from 'react-icons/gr'
import { IoMdInformationCircle } from 'react-icons/io'

const Studio = () => {
  return (
    <div className='flex w-full  h-screen min-h-screen bg-white dark:bg-[#121212]'>
      <div className='w-[260px] bg-[#071A2B] text-[#99AAC4] p-4 text-md hidden lg:block'>
        <h1 className='font-bold flex gap-2 items-center pb-4 border-b border-gray-300/40 text-md'><Link href={'/'}>invoicer</Link> </h1>

        <div className='mt-12'>
          <ul className='flex flex-col gap-4'>
            <li className='flex gap-2 items-center py-4 rounded-sm hover:translate-x-2 transition-transform duration-300 cursor-pointer'><BsBox/> Your Content</li>
            <li className='flex gap-2 items-center py-4 rounded-sm hover:translate-x-2 transition-transform duration-300 cursor-pointer '><IoMdInformationCircle className='text-lg'/> Invoices information</li>
            <li className='flex gap-2 items-center py-4 rounded-sm hover:translate-x-2 transition-transform duration-300 cursor-pointer'><CgChart/> Transaction charts</li>
          </ul>
        </div>
      </div>

      <div className='w-full '>
        <div className='w-full flex flex-row-reverse justify-between items-center p-3 shadow-md bg-[#031525]'>
          <BsBellFill />
        </div>

        <div className='w-full h-full grid place-content-center'>
          under development
        </div>  
      </div>
    </div>
  )
}

export default Studio
