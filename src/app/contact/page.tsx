'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectLabel, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { ComponentType } from "react";
import {FaPhoneAlt,FaEnvelope,FaMapMarkerAlt} from "react-icons/fa";


interface infoType {
  icon:ComponentType;
  title:string;
  description:string;
}

const info:infoType[] = [
  {
    icon:FaPhoneAlt,
    title:"Phone",
    description:"(+92) 301 5898252"
  },
  {
    icon:FaEnvelope,
    title:"Email",
    description:"mahamjabbar320@gmail.com"
  },
  {
    icon:FaMapMarkerAlt,
    title:"Address",
    description:"Androon Ghallah mandi house no 1035, jhang sadar"
  }
]

const Contact = () => {
  return (
    <motion.section
    initial={{opacity:0}}
    animate={{opacity:1,
      transition:{duration:0.4,delay:2,ease:"easeIn"}
    }}
    className="py-6 px-5"
    >
      <div className="container mx-auto px-5 overflow-x-hidden">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          {/* form */}
          <motion.div
          initial={{opacity:0,x:-200}}
          animate={{opacity:1,x:0,
            transition:{duration:0.6,delay:2.4,ease:"easeIn"}
          }}
          className="lg:w-[54%] order-2 lg:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#cbd6f0] rounded-xl">
              <h3 className="text-4xl text-mainAccent-hover">Let&apos;s work together</h3>
              <p className="text-gray-700">Let&apos;s work together to bring your vision to life.Let&apos;s create something great together.</p>
              {/* input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="text" placeholder="Firstname" />
              <Input type="text" placeholder="Lastname" />
              <Input type="email" placeholder="Email address" />
              <Input type="phone" placeholder="Phone number" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a service"/>
              </SelectTrigger>
              <SelectContent>
              <SelectGroup>
                <SelectLabel>Select a service</SelectLabel>
                <SelectItem value="wd">Wordpress Developer</SelectItem>
                <SelectItem value="seo">SEO</SelectItem>
                <SelectItem value="uiux">UI/UX Design</SelectItem>
              </SelectGroup>
              </SelectContent>
            </Select>
            {/* textarea */}
            <Textarea className="h-[200px]" placeholder="Type your message here" />
            {/* button */}
            <Button size="md" className="max-w-40">Send message</Button>
            </form>
          </motion.div>
          {/* info */}
          <motion.div
          initial={{opacity:0,x:200}}
          animate={{opacity:1,x:0,
            transition:{duration:0.6,delay:2.5,ease:"easeIn"}
          }} className="flex flex-1 items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item,index)=>{
                return(
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] text-mainAccent-hover bg-[#cbd6f0] rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{<item.icon />}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700">{item.title}</p>
                    <h3 className="text-lg">{item.description}</h3>
                  </div>
                </li>
                )
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
