 'use client'

 import Photo from "@/components/Photo";
 import { Button } from "@/components/ui/button";
 import Social from "@/components/Social";
 import Link from "next/link";
 import { FiDownload } from "react-icons/fi";
 import Stats from "@/components/Stats";
 import { motion } from "framer-motion";

 const Home = () => {

   const textVariants = {
      hidden: {opacity:0, x:-200},
      visible: {opacity:1, x:0}
   }

   const photoVariants = {
      hidden: {opacity:0, x:200},
      visible: {opacity:1, x:0}
   }

    // const socialVariants = {
    //    hidden:{opaci}
    // }

   return (
     <section className="px-5 h-full">
       <div className="container mx-auto h-full overflow-x-hidden">
         <div className="flex flex-col lg:flex-row justify-between items-center lg:pt-8">
           {/* text */}
           <div className="text text-center lg:text-left order-2 lg:order-none">
             <motion.span className="text-2xl text-gray-700"
             variants={textVariants}
             initial="hidden"
             animate="visible"
             transition={{duration:0.6, delay:1.5}}
             >Full Stack Developer</motion.span>
             <motion.h1 className="h1 mb-5"
             variants={textVariants}
             initial="hidden"
             animate="visible"
             transition={{duration:0.6, delay:2}}
             >
               Hello I&apos;m <br /> <span className="text-mainAccent-hover">Maham Jabbar</span>
             </motion.h1>
             <motion.p className="max-w-[600px] mb-9 text-gray-700"
             variants={textVariants}
             initial="hidden"
             animate="visible"
             transition={{duration:0.6, delay:2.5}}
             >
               Full-Stack Developer with a Computer Science degree, skilled in modern web technologies and passionate about building responsive, user-friendly, and efficient applications.</motion.p>
             <div className="flex flex-col lg:flex-row items-center gap-8">
              <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{duration:0.6, delay:3}}
              >
              <Button variant="outline" size="lg" className="uppercase">
                 <Link href="https://drive.google.com/file/d/1hfOvJe1bIAczj4ldqSrF-FSRm_HAsQsK/view?usp=drive_link" className="flex items-center gap-2">
                     <span>Download CV</span>
                     <FiDownload className="text-lg" />
                 </Link>
               </Button>
              </motion.div>
               <motion.div className="social mb-8 lg:mb-0"
               variants={photoVariants}
               initial="hidden"
               animate="visible"
               transition={{duration:0.6, delay:3.5, staggerChildren:0.2}}
               >
                 <Social containerStyle="flex gap-6" iconStyle="h-9 w-9 flex items-center justify-center border border-mainAccent-hover rounded-full text-mainAccent-hover text-base hover:bg-mainAccent-hover hover:text-white hover:transition-all duration-500" />
               </motion.div>
             </div>
           </div>
           {/* photo */}
           <motion.div className="photo order-1 lg:order-none mb-8 lg:mb-0 w-[50%]"
           variants={photoVariants}
           initial="hidden"
           animate="visible"
           transition={{duration:0.6, delay:2.5}}
           >
             <Photo />
           </motion.div>
         </div>
       </div>
       <Stats />
     </section>
   )
 }

 export default Home

// 'use client';

// import Photo from "@/components/Photo";
// import { Button } from "@/components/ui/button";
// import Social from "@/components/Social";
// import Link from "next/link";
// import { FiDownload } from "react-icons/fi";
// import Stats from "@/components/Stats";
// import { motion } from "framer-motion";

// const Home = () => {
//   // Define Framer Motion variants for different sections
//   const textVariants = {
//     hidden: { opacity: 0, x: -200 },
//     visible: { opacity: 1, x: 0 },
//   };

//   const socialVariants = {
//     hidden: { opacity: 0, x: 200 },
//     visible: { opacity: 1, x: 0 },
//   };

//   const photoVariants = {
//     hidden: { opacity: 0, x: 200 },
//     visible: { opacity: 1, x: 0 },
//   };

//   return (
//     <section className="px-5 h-full">
//       <div className="container mx-auto h-full overflow-x-hidden">
//         <div className="flex flex-col lg:flex-row justify-between items-center lg:pt-8">
          
//           {/* text */}
//           <div className="text text-center lg:text-left order-2 lg:order-none">
//             <motion.span
//               className="text-2xl text-gray-700"
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
//               transition={{ duration: 0.6, delay: 1 }}
//             >
//               Front end Developer
//             </motion.span>

//             <motion.h1
//               className="h1 mb-5"
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
//               transition={{ duration: 0.6, delay: 2.1 }}
//             >
//               Hello I'm <br /> <span className="text-mainAccent-hover">Maham Jabbar</span>
//             </motion.h1>

//             <motion.p
//               className="max-w-[600px] mb-9 text-gray-700"
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
//               transition={{ duration: 0.6, delay: 2.2 }}
//             >
//               I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
//             </motion.p>

//             <div className="flex flex-col lg:flex-row items-center gap-8">
//               <motion.div
//                 variants={textVariants}
//                 initial="hidden"
//                 animate="visible"
//                 transition={{ duration: 0.6, delay: 2.3 }}
//               >
//                 <Button variant="outline" size="lg" className="uppercase">
//                   <Link href="/" className="flex items-center gap-2">
//                     <span>Download CV</span>
//                     <FiDownload className="text-lg" />
//                   </Link>
//                 </Button>
//               </motion.div>

//               <motion.div
//                 className="social mb-8 lg:mb-0"
//                 variants={socialVariants}
//                 initial="hidden"
//                 animate="visible"
//                 transition={{ duration: 0.6, delay: 2.4, staggerChildren: 0.2 }}
//               >
//                 <Social
//                   containerStyle="flex gap-6"
//                   iconStyle="h-9 w-9 flex items-center justify-center border border-mainAccent-hover rounded-full text-mainAccent-hover text-base hover:bg-mainAccent-hover hover:text-white hover:transition-all duration-500"
//                 />
//               </motion.div>
//             </div>
//           </div>

//           {/* photo */}
//           <motion.div
//             className="photo order-1 lg:order-none mb-8 lg:mb-0 w-[50%]"
//             variants={photoVariants}
//             initial="hidden"
//             animate="visible"
//             transition={{ duration: 0.6, delay: 2.2 }}
//           >
//             <Photo />
//           </motion.div>
//         </div>
//       </div>
//       <Stats />
//     </section>
//   );
// };

// export default Home;
