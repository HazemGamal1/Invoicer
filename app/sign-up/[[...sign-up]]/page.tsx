import Image from 'next/image'
import React from 'react'
import logo from "../../../public/invoicerLogo.svg"
import coffee from "../../../public/coffee.jpg"
import { SignUpButton } from '@clerk/nextjs'

const SignUp = () => {
  return (
    <div className='h-screen flex justify-between items-center relative bg-[#FFF]'>
      <div className=' bg-white w-full h-full flex flex-col justify-center mx-auto'>
        <Image src={logo} alt='logo' className='mx-auto my-4 lg:w-[80px]' width={60}/>
        <div className='mx-auto hover:underline'>
          <SignUpButton />
        </div>
      </div>

      <div className='w-[55%] h-full relative hidden md:block'>
        <Image src={coffee} alt='coffee' className='object-cover object-center w-full h-full -z-10'/>
        <p className='absolute bottom-0 left-4 text-white font-bold text-2xl xl:text-3xl 2xl:text-4xl max-w-max p-4 pt-8'>Trying to make the simple part, <span className='text-main'>simpler</span>.</p>
      </div>
      
    </div>
  )
}

export default SignUp
