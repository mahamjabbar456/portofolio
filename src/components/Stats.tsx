
import { motion } from "framer-motion";
import CountUp from "react-countup";

interface statType {
    num:number;
    text:string;
}

const stats:statType[] = [
    {
        num:2,
        text:"Years of Experience"
    },
    {
        num:17,
        text:"Projects Completed"
    },
    {
        num:9,
        text:"Technologies mastered"
    },
    {
        num:100,
        text:"Code commits"
    }
]

const Stats = () => {

    // useGSAP(()=>{
    //     gsap.from('.container',{
    //         opacity:0,
    //         x:-200,
    //         duration:0.6,
    //         delay:3,
    //         stagger:0.2
    //     })
    // },[])

    const reverseIndex = (index:number) => {
        const totalSteps = 4;
        return totalSteps - index;
    }

  return (
    <section className="pt-4 pb-12 lg:pt-8">
        <div className="container mx-auto">
           <div className="flex flex-wrap gap-6 max-w-[80vw] lg:max-w-none mx-auto">
            {stats.map((item,index)=>{
                return(
                    <motion.div
                    initial={{opacity:0,x:-200}}
                    animate={{opacity:1,x:0,
                        transition:{
                            duration:0.6, delay:1.2+index
                        }
                    }}
                    className="flex flex-1 gap-4 items-center justify-center lg:justify-start"
                    key={index}>
                       <CountUp end={item.num} duration={5} delay={2} className="text-4xl lg:text-6xl font-extrabold" />
                       <p
                       className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-gray-700`}
                       >{item.text}</p>
                    </motion.div>
                )
            })}
           </div>
        </div>
    </section>
  )
}

export default Stats
