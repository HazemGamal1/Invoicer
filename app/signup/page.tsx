import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import logo from "../../public/invoicerLogo.svg"
import coffee from "../../public/coffee.jpg"
const SignUp = () => {
  return (
    <div className='h-screen flex justify-between items-center relative bg-[#FFF]'>
      <div className='px-8 py-4 bg-white w-full h-full flex flex-col justify-center'>
        <form className='flex flex-col gap-4 w-full max-w-max my-auto mx-auto'>
        <Image src={logo} alt='logo' className='mx-auto my-4' width={80}/>
          <div className='flex flex-col gap-2 w-full'>
            <input type="text" name="" id="" placeholder='Email or Username' className='text-black w-[22rem] border-[#e6e9ee] border-2 p-2'/>
          </div>
          <div className='flex flex-col gap-2'>
            <input type="password" name="" id="" placeholder='Password' className='text-black w-[22rem] border-[#e6e9ee] border-2 p-2'/>
          </div>
          <Button variant={"invoicer"} className='font-bold' type='submit'>Sign Up</Button>
        </form>
      </div>

      <div className='w-[55%] h-full relative'>
        <Image src={coffee} alt='coffee' className='object-cover object-center w-full h-full -z-10'/>
        <p className='absolute bottom-0 left-4 text-white font-bold text-4xl backdrop-blur-md max-w-max p-4 pt-8'>Trying to make the simple part, <span className='text-main'>simpler</span>.</p>
      </div>
      
    </div>
  )
}

export default SignUp
