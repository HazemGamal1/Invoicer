"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MotionValue, motion } from "framer-motion";
import image from '@/public/Stuck at Home Imagination.png'
import arrow from '@/public/066 (1).png'
import Image from "next/image";

const Hero = ({border, boxShadow,color} : {border: MotionValue<string>, boxShadow: MotionValue<string>, color: MotionValue<string>}) => {
  return (
    <motion.section initial={{opacity: 0, y: 8}} animate={{opacity: 1, y: 0}} transition={{ease: 'easeInOut', duration: 0.45}} className="overflow-hidden xl:overflow-visible relative max-w-[1200px] mx-auto grid place-content-center pt-12 xl:pt-26" >
      <span className="mb-8 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm max-w-max mx-auto text-white">
        Early Access v1.0 Live Now!
      </span>
      <h1 className="text-5xl xl:text-7xl  text-center "><span className="font-normal">Make <span className="bg-blue-500 text-white p-1">Professional</span> </span> <span className="xl:text-nowrap font-extrabold" >Invoices for your business easily</span></h1>
      <p className="text-2xl text-center py-8 px-4 lg:max-w-[50%] mx-auto z-[3]">Keep your business professional until the check is handed</p>
      <div className="max-w-max mx-auto mt-3 flex flex-col gap-8 z-[5]">
          <Link href={"/generateinvoice"}><motion.button className="rounded-full px-4 py-2 text-xl w-full" style={{border, boxShadow, background: color, color: '#FFFF'}}>Generate Invoice</motion.button></Link>
          <Link href={"/studio"}><Button className="rounded-full px-4 py-2 text-xl w-full text-gray-200" variant={'link'}>Explore Studio</Button></Link>
      </div>

      <div className="text-center py-40 z-[3]">
          <p className="text-4xl">An Invoice Creator <motion.span initial={{fontWeight: 500}} animate={{fontWeight: 800}} transition={{ease: 'easeInOut', duration: 0.4}}>and so much more</motion.span></p>
          <p className="text-2xl pt-8">Invoicer helps you maintain control and oversight of your content by storing it for you, also making it easier to build invoices on the go</p>
      </div>
      <motion.div initial={{x: 30}} animate={{x:0}} transition={{ease: 'easeInOut', duration: 1}} className="absolute -right-[10rem] top-[30%] z-[2]">
        <Image src={image} alt="img" width={450} height={450}/>

      </motion.div>    
    </motion.section>
  )
}

export default Hero
