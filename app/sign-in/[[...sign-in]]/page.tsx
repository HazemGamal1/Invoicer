import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import logo from "../../../public/invoicerLogo.svg"

const page = () => {
  return (
    <div className='w-full h-screen grid place-content-center'>
        <Image src={logo} alt='logo' className='mx-auto my-4 lg:w-[80px]' width={60}/>
        <SignIn />
    </div>
  )
}

export default page
