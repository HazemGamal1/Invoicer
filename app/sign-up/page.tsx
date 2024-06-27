import React from 'react'
import Image from 'next/image'
import bg from '@/public/41. pie-and-charts-5 (2).png'
import logo from '@/public/Untitled-1.png'
import Link from 'next/link'

const SignUp = () => {
  return (
    <div className='h-screen relative bg-[#121212]'>
    
      <div className='flex w-full h-full bg-[#F9CA1B] shadow-2xl'>
            <div className='w-[900px] flex flex-col  p-4 overflow-hidden'>
                <div>
                    <h1 className='text-black py-12 text-3xl font-bold'>invoicer</h1>
                    <p className='text-blue-600 text-4xl font-bold'>Start managing your business effeciently</p>
                </div>
                <div className='absolute top-[30%]'> 
                  <Image src={bg} width={500} height={500} className='' alt=''/>

                </div>
            </div>  
            <div className='w-full p-8 bg-[#F2F2F2] text-gray-800 '>
                <p className='text-4xl font-bold'>Welcome To Invoicer !</p>
                <div className='my-16'>
                    <p className='text-xl font-bold'>Username</p>

                </div>
            </div>
      </div>
    </div>
  )
}

export default SignUp
