"use client"
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

import Image from "next/image";
import logo from "../../public/invoicerLogo.svg"
import { Button } from "@/components/ui/button";

const Nav = () => {
  return (
    <nav className="bg-[#FFFF] w-full py-[12px] px-[2rem] z-[10] sticky top-0 left-0 border-b shadow-md">
        <div className="flex justify-between max-w-[98rem] mx-auto items-center">
        <div className="flex gap-6 items-center">
          <div className="flex gap-1 items-center">
            <Image src={logo} alt="logo" width={50}/>
          </div>       
        </div>
        <div className="flex gap-4 items-center">
          <SignedOut>
            <Button variant={"invoicer"}>
              <Link href={"/sign-up"}>
                Get started
              </Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        </div>
    </nav>
  )
}

export default Nav
