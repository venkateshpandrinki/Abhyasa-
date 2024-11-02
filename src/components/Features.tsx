import { FC } from "react";
import Image from "next/image";

interface FeaturesProps {}

const Features: FC<FeaturesProps> = ({}) => {
  return (
    <div className=" mt-3 ">
            <h2 className=" text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-10 text-white mb-12"> What We Offer</h2>
      <div className=" flex flex-col md:flex-row  w-full  justify-evenly">
        
          <div className=" wrapper h-[516px]  flex  flex-col items-center text-center">
            {/* image wrapper */}
            <div
              className=" w-[218px] h-56  rounded-full  flex justify-center items-center "
              style={{
                backgroundImage: `url(${"/assests/mesh-3.jpg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Image
                src={"/images/ft/file.jpg"}
                alt="mesh"
                className="  rounded-full "
                height={154}
                width={154}
              />
            </div>
            <h3 className="  text-3xl font-bold mt-9 mb-9"> Expertise</h3>
            <div className=" text-base text-[#e3e3e3]  space-y-3 ">
            <p className=" ">Industry-seasoned instructors for real-world insights</p>
            <p>Current knowledge aligned with industry needs</p>
            <p>Practical and theoretical skills to meet standards</p>
            </div>
          </div>
          <div className=" wrapper h-[516px]  flex  flex-col items-center text-center">
            {/* image wrapper */}
            <div
              className=" w-[218px] h-56  rounded-full  flex justify-center items-center "
              style={{
                backgroundImage: `url(${"/assests/mesh-2.jpg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Image
                src={"/images/ft/f2.jpg"}
                alt="mesh"
                className=" rounded-full  "
                height={154}
                width={154}
              />
            </div>
            <h3 className="  text-3xl font-bold mt-9 mb-9"> Internships            </h3>
            <div className=" text-base text-[#e3e3e3]  space-y-3 ">
            <p className=" ">Real-world skills through live industry projects</p>
            <p>Expert-led learning for practical knowledge.</p>
            <p>Professional connections to boost job readiness</p>
            </div>
          </div>
          <div className=" wrapper h-[516px]  flex  flex-col items-center text-center">
            {/* image wrapper */}
            <div
              className=" w-[218px] h-56  rounded-full  flex justify-center items-center "
              style={{
                backgroundImage: `url(${"/assests/mesh-1.jpg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Image
                src={"/images/ft/f33jpg.jpg"}
                alt="mesh"
                className="  rounded-full "
                height={154}
                width={154}
              />
            </div>
            <h3 className="  text-3xl font-bold mt-9 mb-9"> Training & Placement</h3>
            <div className=" text-base text-[#e3e3e3]  space-y-3 ">
            <p className=" ">Hands-on training led by industry experts</p>
            <p>Personalized support for career and resume building</p>
            <p>Placement opportunities and alumni support</p>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Features;
