import { motion, Variants } from "framer-motion";
import { Button } from "./ui/button";
import {Hedvig_Letters_Serif} from 'next/font/google'
const hedvig = Hedvig_Letters_Serif({ subsets: ["latin"] });
const fadeInUpAnimation: Variants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 1.5,
    },
  },
};
type HeroSlideProps = {
  scrollToEnrollment: () => void;
};

const Heroslide = ({ scrollToEnrollment }: HeroSlideProps) => {
  return (
    <>
    {/* <motion.div initial="hidden" animate="show" variants={fadeInUpAnimation}
    className="hidden  md:flex flex-col justify-center items-center text-center lg:mt-8 gap-4 mb-10"
    >
      <motion.h1 variants={fadeInUpAnimation} className={` ${hedvig.className} font-black leading-10   
      text-4xl 
      sm:leading-none md:text-[5rem]  tracking-normal md:tracking-wide
    text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-400
      `}>
        Start Your VLSI career
        <br />
        with Excellent Placement
      </motion.h1>
     


      <motion.p variants={fadeInUpAnimation}
      className=" text-lg font-bold md:text-3xl"
      >
        {" "}
        Designed & Delivered by Industry Experts
      </motion.p>
      <motion.div variants={fadeInUpAnimation}>
        <Button className=" bg-blue-600 hover:bg-blue-700" onClick={scrollToEnrollment}>Enroll Now</Button>
      </motion.div>

      
    </motion.div> */}
    
   
    <div 
    className="  flex flex-col justify-center items-center text-center lg:mt-8 gap-4"
    >
      <h1 className={` ${hedvig.className} font-black leading-10   
      text-4xl 
      sm:leading-none md:text-[5rem]  tracking-normal md:tracking-wide
    text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-400
      `}>
        Start Your VLSI career
        <br />
        with Excellent Placement
      </h1>
     


      <p 
      className=" text-lg font-bold md:text-3xl"
      >
        {" "}
        Designed & Delivered by Industry Experts
      </p>
      <div >
        <Button className=" bg-blue-600 hover:bg-blue-700" onClick={scrollToEnrollment}>Enroll Now</Button>
      </div>
    </div>
    </>
  );
};

export default Heroslide;
