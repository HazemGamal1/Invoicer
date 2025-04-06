"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MotionValue, motion } from "framer-motion";

const Hero = ({border, boxShadow,color} : {border: MotionValue<string>, boxShadow: MotionValue<string>, color: MotionValue<string>}) => {
  return (
    <motion.section initial={{opacity: 0, y: 8}} animate={{opacity: 1, y: 0}} transition={{ease: 'easeInOut', duration: 0.45}} className="px-4 h-full lg:px-0 overflow-hidden xl:overflow-visible relative max-w-[1200px] mx-auto grid place-content-center" >
      <span className="mb-8 inline-block rounded-full h-f bg-gray-600/50 px-3 py-1.5 text-sm max-w-max mx-auto text-white">
        Early Access v1.0 Live Now!
      </span>
      <h1 className="text-4xl xl:text-7xl  text-center "><span className="font-normal">Make <span className="bg-blue-500 text-white p-1">Professional</span> </span> <span className="xl:text-nowrap font-extrabold" >Invoices for your business easily</span></h1>
      <p className="text-xl text-center py-8 px-4 lg:max-w-[50%] mx-auto z-[3]">Keep your business professional until the check is handed</p>
      <div className="max-w-max mx-auto mt-3 flex flex-col gap-5 z-[5]">
          <Link href={"/generateinvoice"}><motion.button className="px-4 py-2 text-xl w-full" style={{border, boxShadow, background: color, color: '#FFFF'}}>Generate Invoice</motion.button></Link>
          <Link href={"/studio"}><Button className="px-4 py-1 text-xl w-full text-gray-200" variant={'link'}>Explore Studio</Button></Link>
      </div>
    </motion.section>
  )
}

export default Hero
