'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

interface service {
  num: string,
  title: string,
  description: string,
  href: string
}

const services: service[] = [
  {
    num: "01",
    title: "WordPress Developer",
    description: "A WordPress Developer specializes in building, customizing, and maintaining websites on the WordPress platform, using skills in PHP, HTML, CSS, and JavaScript to enhance functionality and user experience.",
    href: ""
  },
  {
    num: "02",
    title: "Search Engine Optimization(SEO)",
    description: "SEO (Search Engine Optimization) is the practice of optimizing websites and content to improve their visibility on search engines, driving organic traffic through targeted keywords and high-quality, relevant content.",
    href: ""
  },
  {
    num: "03",
    title: "Front End Developer",
    description: "A Front-End Developer builds the visual and interactive elements of websites and applications, using HTML, CSS, and JavaScript to create user-friendly and responsive designs.",
    href: ""
  },
  {
    num: "04",
    title: "Nextjs Developer",
    description: "A Next.js Developer specializes in building fast, server-rendered React applications using the Next.js framework, focusing on performance, scalability, and optimized SEO for seamless user experiences.",
    href: ""
  },
]

const Services = () => {
  const rightDiv = (index:number)=>{
     return ((index%2==0)
     ? {
       hidden:{opacity:0,x:-200},
       visible:{opacity:1,x:0}
     } : {
      hidden:{opacity:0,x:200},
      visible:{opacity:1,x:0}
    })
  }
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0 overflow-x-hidden px-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service, index) => {
            return (
              <motion.div
              variants={rightDiv(index)}
              initial="hidden"
              animate="visible"
              transition={{duration:0.4,delay:index+1,ease:"easeIn"}}
              className="flex flex-1 flex-col justify-center gap-6 group"
              key={index}>
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href}
                  className="h-[70px] w-[70px] rounded-full bg-white group-hover:bg-mainAccent-hover flex items-center justify-center transition-all duration-500 hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-3xl text-black" />
                  </Link>
                </div>
                {/* title */}
                <div className="text-[24px] md:text-[34px] font-bold leading-none group-hover:text-mainAccent-hover transition-all duration-500">{service.title}</div>
                {/* description */}
                <div className="text-gray-700">{service.description}</div>
                <div className="border-b border-gray-400 w-full"></div>
              </motion.div>

            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
