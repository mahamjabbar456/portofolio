"use client";

import { usePathname } from "next/navigation";
import {CiMenuFries} from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";

interface link {
    name:string;
    path:string;
}

const links:link[] = [
    {
        name:"Home",
        path:"/"
    },
    {
        name:"Services",
        path:"/services"
    },
    {
        name:"Resume",
        path:"/resume"
    },
    {
        name:"Work",
        path:"/work"
    },
    {
        name:"Contact",
        path:"/contact"
    },
]

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
        <SheetTrigger className="flex items-center justify-between">
            <CiMenuFries className="text-mainSecondary text-[32px] font-semibold" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            {/* logo */}
            <div className="mt-32 mb-40 text-center">
                <Link href="/">
                <h1 className="text-4xl">
                    Maham <span className="text-mainSecondary font-semibold">Jabbar</span>
                </h1>
                </Link>
            </div>
            {/* nav */}
            <nav className="flex flex-col justify-between items-center gap-8">
                {links.map((link,index)=>{
                    return(
                        <Link href={link.path} key={index}>{link.name}</Link>
                    )
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
