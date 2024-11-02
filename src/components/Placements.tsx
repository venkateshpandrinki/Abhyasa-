
import Marquee from "@/components/ui/marquee";

const logos = [
  { "image": "/images/comp/c1.jpg", "alt": "Logo 1" },
  { "image": "/images/comp/c2.jpg", "alt": "Logo 2" },
  { "image": "/images/comp/c3.jpg", "alt": "Logo 3" },
  { "image": "/images/comp/c4.jpg", "alt": "Logo 4" },
  { "image": "/images/comp/c5.png", "alt": "Logo 5" },
  { "image": "/images/comp/c6.png", "alt": "Logo 6" },
  { "image": "/images/comp/c7 .jpg", "alt": "Logo 7" },
  { "image": "/images/comp/c8.png", "alt": "Logo 8" },
  { "image": "/images/comp/c9.jpg", "alt": "Logo 9" },
  { "image": "/images/comp/c10.png", "alt": "Logo 10" },
  { "image": "/images/comp/c11.jpg", "alt": "Logo 11" },
  { "image": "/images/comp/c12.jpg", "alt": "Logo 12" },
  { "image": "/images/comp/c13.jpg", "alt": "Logo 13" },
  { "image": "/images/comp/c14.png", "alt": "Logo 14" },
  { "image": "/images/comp/c15.png", "alt": "Logo 15" },
  { "image": "/images/comp/c16.jpg", "alt": "Logo 16" },
  { "image": "/images/comp/c17.png", "alt": "Logo 17" },
  { "image": "/images/comp/c18.png", "alt": "Logo 18" },
  { "image": "/images/comp/c19.png", "alt": "Logo 19" },
  { "image": "/images/comp/c20.png", "alt": "Logo 20" }
]



export function Placements() {
  return (
    <>
      <div className="relative flex h-96 w-full flex-col items-center justify-center overflow-hidden rounded-lg border   md:shadow-xl mt-3">
        <div className=" text-center mb-3 ">
          <p className=" text-4xl sm:text-5xl lg:text-6xl font-bold text-center  text-white">Our Placements</p>
        </div>
        <Marquee
          pauseOnHover
          className="sm:h-20 md:h-24 justify-center overflow-hidden [--duration:30s] [--gap:1rem]"
        >
          {logos.map((data, idx) => (
            <img
              key={idx}
              src={data.image}
              alt={data.alt}
              style={{ aspectRatio: "16/9" }}
              className="mx-auto md:h-20  md:w-auto  h-16 w-auto cursor-pointer rounded-xl  transition-all duration-300 hover hover:shadow-white shadow-md"
            />
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          reverse
          className=" sm:h-20 md:h-24 justify-center overflow-hidden [--duration:30s] [--gap:1rem]"
        >
          {logos.map((data, idx) => (
            <img
              key={idx}
              src={data.image}
              alt={data.alt}
              style={{ aspectRatio: "16/9" }}
              className="mx-auto  md:h-20  md:w-auto  h-16 w-auto cursor-pointer rounded-xl  transition-all duration-300 hover hover:shadow-white shadow-md"
            />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </>
  );
}
