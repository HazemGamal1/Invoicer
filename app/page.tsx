"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Newheights from "./components/Newheights";
import logo from '@/public/Untitled-3.png'
import arrow from '@/public/066 (1).png'

interface data {
  companyTitle: string,
  customerTitle: string,
  product: string,
}
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useEffect } from "react";

const colors = [ "#1E67C6", "#4D85B1", "#FAC717", "#2563EB"]
export default function Home() {
  const color = useMotionValue(colors[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 120% at 50% 0%, #ffffff00 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 3px 24px ${color}`;
  useEffect(() => {
    animate(color, colors, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror"
    })
  })
  return (

    <main>
      <motion.div style={{backgroundImage}} className="relative">
        <nav className="dark:bg-[#020817]  w-full py-[12px] px-[32px] z-[10]">
          <div className="flex justify-between max-w-[1200px] mx-auto items-center">
            <div className="flex gap-2 items-start">
              <motion.h1  className="text-2xl font-bold w-[100px] my-auto h-[30px] text-white select-none">invoicer</motion.h1>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="min-w-min hover:bg-none">
                    <NavigationMenuTrigger >Get Started</NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col p-6  gap-6 text-nowrap">
                      <Link href={'/generateinvoice'}><NavigationMenuLink>Generate your invoice</NavigationMenuLink></Link>
                      <NavigationMenuLink>Generate your business card (demo)</NavigationMenuLink>
                      <Link href='/'><NavigationMenuLink>Create a new project</NavigationMenuLink></Link>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
            </div>
            <div className="flex gap-3 items-center">
              {/* <motion.button >Sign Up</motion.button> */}
              
              <Link href={'https://github.com/HazemGamal1'} target="#"><BsGithub className="text-3xl"/></Link>
            </div>
          </div>
        </nav>
        <Hero color={color} border={border} boxShadow={boxShadow}/>
        <Image src={arrow} alt="arrow" className="absolute -bottom-10 left-[48%] rotate-[170deg] z-[1000]" width={80} height={80}/>
      </motion.div>
      <Overview/>
      {/* <Newheights /> */}
    </main>
  );
}
