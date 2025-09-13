'use client'

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";
import { ComponentType } from "react";
import {FaHtml5,FaCss3,FaJs,FaGithub,FaFigma,FaPhp,FaBootstrap} from "react-icons/fa"
import {SiTypescript,SiNextdotjs,SiTailwindcss,SiMysql} from "react-icons/si"
import EducationIcon from "../../../public/assets/resume/cap.svg";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface info {
  fieldName:string;
  fieldValue:string;
}

interface aboutType {
  title:string;
  description:string,
  information:info[]
}

// about
const about:aboutType = {
  title:"Maham Jabbar",
  description:"Full-Stack Developer with a Bachelor’s degree in Computer Science and a strong foundation in modern web technologies. Skilled in HTML5, CSS3, Bootstrap, JavaScript, Ajax, PHP, and MySQL, with proven expertise in developing responsive, user-friendly, and efficient web applications. Highly motivated to contribute technical knowledge and problem-solving abilities to adynamic software house while continuously enhancing professional growth.",
  information : [
    {
      fieldName:"Name",
      fieldValue:"Maham Jabbar"
    },
    {
      fieldName:"Phone",
      fieldValue:"(+92) 3015898252"
    },
    {
      fieldName:"Experience",
      fieldValue:"2 year as Full stack Developer"
    },
    {
      fieldName:"Nationality",
      fieldValue:"Pakistani"
    },
    {
      fieldName:"Available",
      fieldValue:"Freelance + Onsite"
    },
    {
      fieldName:"Language",
      fieldValue:"English, Urdu"
    },
    {
      fieldName:"Email",
      fieldValue:"mahamjabbar320@gmail.com"
    },
  ]
}

// Education type
interface Eduinfo {
  institution:string;
  degree:string;
  duration:string
}

interface EducationType {
  icon:ComponentType;
  title:string;
  description:string,
  information:Eduinfo[]
}

// education
const education:EducationType = {
  icon:EducationIcon,
  title:"My education",
  description:"Maham Jabbar has a solid background in Computer Science, from early CS studies through an ICS and a Bachelor's degree. Skilled in WordPress, SEO, front-end development, and exploring AI agent technologies.",
  information:[    
    {
      institution:"Govt PostGraduate College, Jhang",
      degree:"BS (Computer Science)",
      duration:"Completed in 2025"
    },
    {
      institution:"DigiSkills.pk",
      degree:"Certified WordPress Development",
      duration:"3 month course completed in 2023"
    },
    {
      institution:"Superior College Jhang",
      degree:"Intermediate in Computer Science (ICS)",
      duration:"Completed in 2021"
    },
    {
      institution:"Govt Bashir Girls High School, Jhang Sadar.",
      degree:"Secondary Education in Computer Science",
      duration:"Completed in 2019"
    }

  ]
}

// skill Type
interface skillinfo {
  icon: ComponentType;
  name:string;
}

interface skillType {
  title:string;
  description:string,
  skillList:skillinfo[]
}

// skill data
const skill:skillType = {
  title:"My Skills",
  description:"I excel at crafting elegant digital experiences and I am proficient in various programming language and technologies.",
  skillList:[
    {
      icon: FaHtml5,
      name: "Html 5"
    },
    {
      icon: FaCss3,
      name: "CSS"
    },
    {
      icon: FaJs,
      name: "Javascript"
    },
    {
      icon: SiTypescript,
      name: "Typescript"
    },
    {
      icon: SiNextdotjs,
      name: "Next Js"
    },
    {
      icon: FaFigma,
      name: "Figma"
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind CSS"
    },
    {
      icon: FaGithub,
      name: "Github"
    },
    {
      icon: FaPhp,
      name: "PHP"
    },
    {
      icon: SiMysql,
      name: "Mysql"
    },
    {
      icon: FaBootstrap,
      name: "Bootstrap"
    },
  ]
}

const Resmue = () => {
  const textVariants = {
    hidden:{opacity:0, x:500},
    visible:{opacity:1, x:0}
  }

  const rightDiv = (index:number)=>{
    return ((index%2==0)
    ? {
      hidden:{opacity:0,x:-500},
      visible:{opacity:1,x:0}
    } : {
     hidden:{opacity:0,x:200},
     visible:{opacity:1,x:0}
   })
 }

 const skillAnimation = (index:number) =>{
  return((index>=0 && index<=3)
  ? {
    hidden:{opacity:0,x:-500},
    visible:{opacity:1,x:0}
  } :{
    hidden:{opacity:0,x:200},
    visible:{opacity:1,x:0}
  }
)
 }
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1,
      transition:{duration:0.5,delay:2.5,ease:"easeIn"}
    }}
    className="min-h-[80vh] flex justify-center items-center py-12 lg:py-0 overflow-x-hidden">
      <div className="container mx-auto px-5">
        <Tabs
        defaultValue="education"
        className="flex flex-col gap-[60px] lg:flex-row"
        >
          <TabsList className="flex flex-col max-w-[350px] mx-auto gap-6 lg:mx-0 w-full ">
            <TabsTrigger value="education" >
              Education
            </TabsTrigger>
            <TabsTrigger value="skills" >
              Skills
              </TabsTrigger>
            <TabsTrigger value="about" >
              About me
            </TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="w-full min-h-[70vh]">
            {/* education */}
            <TabsContent value="education" className="w-full">
               <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <motion.h3
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{duration:0.5,delay:2.7}}
                  className="text-4xl font-bold inline-flex gap-3 items-center justify-center lg:justify-start">{education.title} 
                  <Image src={EducationIcon} alt="education icon" width={100} height={100} className="w-10 h-10 text-black" />
                  </motion.h3>
                  <motion.p
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{duration:0.5,delay:2.9}}
                  className="max-w-[600px] mx-auto text-gray-700 lg:mx-0 mb-4">{education.description}</motion.p>
               </div>
               <ScrollArea className="h-[380px] lg:pb-10" >
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.information.map((item,index)=>{
                      return(
                        <motion.li
                        variants={rightDiv(index)}
                        initial="hidden"
                        animate="visible"
                        transition={{duration:0.5, delay:3+index}}
                        key={index} className="bg-[#cbd6f0] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1">
                           <span className="text-mainAccent-hover">{item.duration}</span>
                           <h3 className="text-xl max-w-[270px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                           <div className="flex items-center gap-3">
                            {/* dot */}
                             <span className="w-[6px] h-[6px] rounded-full bg-mainAccent-hover"></span>
                             <p className="text-gray-700">{item.institution}</p>
                           </div>
                        </motion.li>
                      )
                    })}
                  </ul>
               </ScrollArea>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
               <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center lg:text-left">
                     <motion.h3
                     variants={textVariants}
                     initial="hidden"
                     animate="visible"
                     transition={{duration:0.5,delay:2}}
                     className="text-4xl font-bold">{skill.title}</motion.h3>
                     <motion.p
                     variants={textVariants}
                     initial="hidden"
                     animate="visible"
                     transition={{duration:0.5,delay:2.5}}
                     className="max-w-[600px] text-gray-700 mx-auto lg:mx-0">{skill.description}</motion.p>
                  </div>
                  <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] gap-4">
                    {skill.skillList.map((item,index)=>{
                      return(
                        <motion.li
                        variants={skillAnimation(index)}
                        initial="hidden"
                        animate="visible"
                        transition={{duration:0.6, delay:index + 3,ease:"easeIn"}}
                        key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="flex items-center justify-center w-full h-[150px] bg-[#cbd6f0] group rounded-xl">
                                   <div className="text-6xl transition-all duration-500 group-hover:text-mainAccent-hover">{<item.icon />}</div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{item.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                        </motion.li>
                      )
                    })}
                  </ul>
               </div>
            </TabsContent>
            {/* about me */}
            <TabsContent value="about" className="w-full text-center lg:text-left">
               <div className="flex flex-col gap-[30px]">
                 <motion.h3
                 variants={textVariants}
                 initial="hidden"
                 animate="visible"
                 transition={{duration:0.5,delay:2}}
                 className="text-4xl font-bold">{about.title}</motion.h3>
                 <motion.p
                 variants={textVariants}
                 initial="hidden"
                 animate="visible"
                 transition={{duration:0.5,delay:2.5}}
                 className="text-gray-700 max-w-[600px] mx-auto lg:mx-0">{about.description}</motion.p>
                 <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6">
                    {about.information.map((item,index)=>{
                      return(
                        <motion.li
                        variants={rightDiv(index)}
                        initial="hidden"
                        animate="visible"
                        transition={{duration:0.5, delay:3+index}}
                        key={index} className="flex items-center justify-center lg:justify-start gap-4">
                          <span className="text-gray-700">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </motion.li>
                      )
                    })}
                 </ul>
               </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resmue
