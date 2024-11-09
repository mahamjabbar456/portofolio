'use client';
import {Swiper,SwiperSlide} from "swiper/react"
import { Swiper as SwiperClass } from "swiper/types"; 
import "swiper/css";
import {BsArrowUpRight,BsGithub} from "react-icons/bs";
import { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSlideBtn from "@/components/WorkSlideBtn";

interface skillinfo {
  name:string
}

interface projectType {
  num:string;
  category:string;
  title:string;
  description:string;
  stack:skillinfo[]
  image:string;
  live:string;
  github:string;
}


const projects:projectType[] = [
  {
    num : "01",
    category: "frontend",
    title : "Ecommerce Website",
    description : "A user-friendly eCommerce website offering a wide range of products with secure checkout, personalized recommendations, and fast shipping. Features detailed product descriptions, customer reviews, and convenient filters to make shopping easy and enjoyable. Perfect for finding everything you need in one place!",
    stack : [{name:"Html5"},{name:"TailwindCSS"},{name:"NextJs"}],
    image: "/assets/work/ecommercefirstpage.png",
    live:"https://ecommerce-website-phi-one.vercel.app/",
    github:"https://github.com/mahamjabbar456/ecommerce_website.git"
  },
  {
    num : "02",
    category: "frontend",
    title : "Digital Clock App",
    description : "A sleek and customizable digital clock app that displays accurate time with multiple themes, alarm settings, and a range of time formats. Perfect for home screens or desktops, it offers easy readability and options for personalized backgrounds, colors, and styles to match any aesthetic.",
    stack : [{name:"Html5"},{name:"TailwindCSS"},{name:"NextJs"}],
    image:"/assets/work/DigitalClockApp.png",
    live:"https://maham-digital-clock-app.vercel.app/",
    github:"https://github.com/mahamjabbar456/DigitalClockApp.git"
  },
  {
    num : "03",
    category: "frontend",
    title : "Weather App",
    description : "A user-friendly weather app providing real-time forecasts, radar maps, and alerts. Get accurate temperature, precipitation, and wind data, along with hourly and weekly forecasts, in a sleek and customizable design. Perfect for staying prepared, rain or shine!",
    stack : [{name:"Html5"},{name:"TailwindCSS"},{name:"NextJs"}],
    image:"/assets/work/WeatherApp.png",
    live:"https://weatherapp-dun-iota.vercel.app/",
    github:"https://github.com/mahamjabbar456/weatherapp.git"
  },
  {
    num : "04",
    category: "frontend",
    title : "Number Guessing Game",
    description : "A fun and addictive number guessing game where players try to guess a secret number within a limited range and number of attempts. Get hints after each guess, improve your strategy, and aim for the high score! Perfect for quick challenges and testing your intuition.",
    stack : [{name:"Html5"},{name:"TailwindCSS"},{name:"NextJs"}],
    image:"/assets/work/NumberGuessingGame.png",
    live:"https://maham-number-guessing-game.vercel.app/",
    github:"https://github.com/mahamjabbar456/NumberGuessingGame.git"
  },
  {
    num : "05",
    category: "frontend",
    title : "Simple Calculator",
    description : "A straightforward and easy-to-use calculator app for quick calculations, featuring basic arithmetic functions and a clean, minimal interface. Perfect for everyday math needs, from addition and subtraction to multiplication and division.",
    stack : [{name:"Html5"},{name:"TailwindCSS"},{name:"NextJs"}],
    image:"/assets/work/SimpleCalculator.png",
    live:"https://maham-simple-calculator.vercel.app/",
    github:"https://github.com/mahamjabbar456/SimpleCalculator.git"
  },
  {
    num : "06",
    category: "frontend",
    title : "Color Picker App",
    description : "A versatile color picker app that lets you explore, select, and save custom colors with precision. Includes HEX, RGB, and HSL codes for accurate color matching and a palette history for quick access. Perfect for designers, developers, and artists looking for an easy tool to manage colors.",
    stack : [{name:"Html5"},{name:"TailwindCSS"},{name:"NextJs"}],
    image:"/assets/work/colorPicker.png",
    live:"https://maham-color-picker-app.vercel.app/",
    github:"https://github.com/mahamjabbar456/ColorPickerApp.git"
  },
  {
    num : "07",
    category: "frontend",
    title : "Tip Calculator App",
    description : "A handy tip calculator app that quickly calculates tips and splits bills among friends. Simply enter your bill amount, select a tip percentage, and see the total cost per person. Perfect for dining out, making tipping easy and accurate!",
    stack : [{name:"Html5"},{name:"TailwindCSS"},{name:"NextJs"}],
    image:"/assets/work/TipCalculator.png",
    live:"https://maham-tip-calculator.vercel.app/",
    github:"https://github.com/mahamjabbar456/TipCalculator.git"
  },
  {
    num : "08",
    category: "frontend",
    title : "Random Joke Generator",
    description : "A fun random joke generator that delivers fresh and hilarious jokes at the tap of a button. Get quick laughs anytime with a variety of joke categories, from puns to one-liners. Perfect for lightening the mood and sharing with friends!",
    stack : [{name:"Html5"},{name:"TailwindCSS"},{name:"NextJs"}],
    image:"/assets/work/randomJokeGenerator.png",
    live:"https://maham-random-joke-generator.vercel.app/",
    github:"https://github.com/mahamjabbar456/RandomJokeGenerator.git"
  },
  {
    num : "09",
    category: "frontend",
    title : "Html Previewer App",
    description : "An HTML previewer app that lets you write and instantly preview HTML code in real-time. Perfect for testing snippets, practicing coding, or quickly visualizing web elements with live updates. Ideal for developers and learners looking for a simple, efficient way to see HTML in action!",
    stack : [{name:"Html5"},{name:"TailwindCSS"},{name:"NextJs"}],
    image:"/assets/work/htmlpreview.png",
    live:"https://maham-html-previewer-app.vercel.app/",
    github:"https://github.com/mahamjabbar456/HtmlPreviewerApp.git"
  },
]

const textVariants = {
   hidden:{opacity:0,x:-200},
   visible:{opacity:1,x:0}
}

const Work = () => {
  const [project,setProject] = useState<projectType>(projects[0]);

  const handleSlideChange = (swiper:SwiperClass) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section
    initial={{opacity:0}}
    animate={{opacity:1,
      transition:{duration:0.6,delay:2,ease:"easeIn"}
    }}
    className="min-h-[80vh] flex flex-col justify-center py-12 px-5 lg:px-0 overflow-x-hidden"
    >
      <div className="container mx-auto">
         <div className="flex flex-col lg:flex-row lg:gap-[30px]">
            <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/* outline num */}
                <motion.div className="text-8xl font-extrabold leading-none text-transparent text-outline"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{duration:0.6,delay:2.5}}
                >
                  {project.num}
                </motion.div>
                {/* project category */}
                <motion.div className="text-[38px] leading-none text-black capitalize font-bold group-hover:text-mainAccent-hover transition-all duration-500 "
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{duration:0.4,delay:3}}
                >{project.category} project</motion.div>
                {/* project title */}
                <motion.div className="font-medium text-[30px] leading-none text-mainAccent-hover"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{duration:0.4,delay:3.5}}
                >
                  {project.title}
                </motion.div>
                {/* project description */}
                <motion.div className="text-gray-700"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{duration:0.4,delay:4}}
                >
                  {project.description}
                </motion.div>
                {/* project stack */}
                <motion.ul className="flex gap-4"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{duration:0.4,delay:4.5,staggerChildren:0.3}}>
                  {project.stack.map((item,index)=>{
                    return(
                      <li key={index} className="text-xl text-mainAccent-hover">
                        {item.name}
                        {/* remove the last comma */}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    )
                  })}
                </motion.ul>
                {/* border */}
                <div className="border border-gray-700"></div>
                {/* buttons */}
                <motion.div className="flex items-center gap-4"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{duration:0.4,delay:5,staggerChildren:0.3}}
                >
                  {/* live project button */}
                  <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-[#cbd6f0] flex justify-center items-center group">
                        <BsArrowUpRight className="text-3xl text-black group-hover:text-mainAccent-hover" />
                      </TooltipTrigger>
                      <TooltipContent>
                         <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  </Link>
                  {/* github project button */}
                  <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-[#cbd6f0] flex justify-center items-center group">
                        <BsGithub className="text-3xl text-black group-hover:text-mainAccent-hover" />
                      </TooltipTrigger>
                      <TooltipContent>
                         <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  </Link>
                </motion.div>
              </div>
            </div>
            <motion.div
            initial={{opacity:0,x:500}}
            animate={{opacity:1,x:0,
              transition:{duration:0.5,delay:3,ease:"easeIn"}
            }}
            className="w-full lg:w-[50%]">
              <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="lg:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              >
                {projects.map((project,index)=>{
                  return ( 
                    <SwiperSlide key={index}>
                      <div className="h-[460px] relative group flex justify-center items-center bg-[#cbd6f0]">
                       {/* overlay */}
                       <div className="absolute top-0 bottom-0 w-full h-full bg-[#cbd6f0]/10 z-10"></div>
                       {/* image */}
                       <div className="relative h-full w-full">
                        <Image src={project.image} alt={`Image of ${project.title}`}
                        fill
                        className="object-cover"
                        />
                       </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
                {/* slider buttons */}
                <WorkSlideBtn containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"
                btnStyle="bg-mainAccent-hover hover:bg-mainAccent-hover2 text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all text-black"
                />
              </Swiper>
            </motion.div>
         </div>
      </div>
    </motion.section>
  )
}

export default Work
