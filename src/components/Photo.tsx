"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import myPic from "../../public/myportfoliopic.png";

const Photo = () => {
    // Define the circle animation variants
    const circleVariants = {
        hidden: { strokeDashoffset: 1000 },
        visible: {
            strokeDashoffset: 0,
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="h-full w-full relative flex items-center justify-center lg:-top-9 -top-5">
            <motion.div
            initial={{opacity:0}}
            animate={{
                opacity:1,
                transition:{duration:0.4, delay:2.0, ease:"easeIn"}
            }}
            >
                {/* Image */}
                <motion.div
                initial={{opacity:0}}
                animate={{
                    opacity:1,
                    transition:{duration:0.4, delay:2.4, ease:"easeInOut"}
                }}
                className="w-[298px] h-[298px] lg:w-[398px] lg:h-[398px] absolute">
                    <Image 
                        src={myPic} 
                        alt="profile pic"
                        priority
                        quality={100}
                        fill
                        className="object-contain"
                    />
                </motion.div>
                {/* Circle with animation */}
                <motion.svg
                    className="w-[300px] h-[300px] lg:w-[406px] lg:h-[406px] relative top-9"
                    fill="transparent"
                    viewBox="0 0 406 406"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="203" // Adjusted for a centered circle
                        cy="203"
                        r="200" // Adjusted for a centered circle
                        stroke="#7091E6"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{strokeDasharray: "24 10 0 0"}}
                        animate={{
                            strokeDasharray:["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate:[120,360]
                        }}
                        transition={{
                            duration:20,
                            repeat:Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default Photo;
