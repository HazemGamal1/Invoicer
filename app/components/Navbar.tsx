import React from 'react'
import { Button } from '@/components/ui/button'
import { UploadIcon } from "@radix-ui/react-icons";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {motion } from 'framer-motion'
const Navbar = () => {
    const pathname = usePathname();
  return (
    <motion.nav initial={{y: -5, opacity: 0}} animate={{y: 0, opacity: 1}} className="bg-[#2563EB] w-full flex justify-between text-white text-sm  p-1 items-center">
      <div className='flex gap-3 px-2'>
        <Link href="/" className="border-r-2 px-4 border-gray-100">Home</Link>
        {/* <p>Customize</p>
        <p>Templates</p> */}
      </div>
      <div className="flex gap-2">
          {
              !pathname.includes("/generateinvoice") &&
              <Link href={"/generateinvoice"}>Generate</Link>
          }
          {/* <Button variant={'secondary'} className="flex gap-2 items-center"><UploadIcon /> Upload Invoice</Button> */}
      </div>
    </motion.nav>
  )
}

export default Navbar
