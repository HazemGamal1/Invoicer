"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { BsBellFill, BsBox } from 'react-icons/bs'
import { CgChart } from 'react-icons/cg'
import { GrCircleInformation } from 'react-icons/gr'
const Studio = () => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <div className='flex w-full h-full min-h-screen overflow-hidden'>
      <div className='w-[360px] border-r border-r-gray-200 p-4 text-md hidden lg:block'>
        <div>
          <h1 className='mb-12 font-bold text-[#676767] text-2xl flex gap-2'>invoicer <span className='text-sm font-normal'>studio</span></h1>
          <ul className='flex flex-col  text-[0.9rem] gap-0.5'>
            <li className={`flex text-[#868A9A] ${pathname === "/studio" && "text-[#FFF] bg-[#0067B8] font-bold" } hover:bg-[#0067B8] gap-2 items-center py-2 px-2 transition-transform duration-300 cursor-pointer`}><BsBox/> Your Content</li>
            <li className='flex  ${pathname === "/" && "bg-[#1D1D1F]" } hover:bg-[#1D1D1F] hover:text-white text-[#868A9A]  gap-2 items-center py-2 px-2 rounded-md  transition duration-300 cursor-pointer '><GrCircleInformation/> Invoices information</li>
            <li className='flex ${pathname === "/" && "bg-[#1D1D1F]" } hover:bg-[#1D1D1F] hover:text-white text-[#868A9A] gap-2 items-center py-2 px-2 rounded-md  transition duration-300 cursor-pointer'><CgChart/> Transaction charts</li>
          </ul>
        </div>
      </div>

      <div className='w-full '>
        <div className='px-12 py-6'>
          Invoices
        </div>

        <div className='w-full h-full grid place-content-center'>
          under development
        </div>  
      </div>
    </div>
  )
}

export default Studio
