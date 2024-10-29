import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const logos = [
  {
    name: "Microsoft",
    img: "data:image/png;base64,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",
  },
  {
    name: "Apple",
    img: "https://www.abhyasa.org.in/images/hcl.png",
  },
  {
    name: "Google",
    img: "https://www.abhyasa.org.in/images/appex.jpg",
  },
  {
    name: "Facebook",
    img: "https://www.abhyasa.org.in/images/intel.png",
  },
  {
    name: "LinkedIn",
    img: "https://www.abhyasa.org.in/images/cientra.jpg",
  },
  {
    name: "Twitter",
    img: "https://www.abhyasa.org.in/images/tech%20mahindra.png",
  },
  {
    name: "intel",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8VaAfOQdINhqW5EFmoqSvO5TH7D3ujYWSDQ&s",
  },
  {
    name: "Tech mahindra",
    img: "https://media.assettype.com/bloombergquint%2Fimport%2F4e1f2vq_tech-mahindra-new_625x300_30_July_19.jpg?auto=format%2Ccompress&w=732",
  },
];

export function Placements() {
  return (
    <>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl mt-3">
        <div className=" text-center mb-3 ">
          <p className=" text-4xl  md:text-6xl font-medium ">Our Placements</p>
        </div>
        <Marquee
          pauseOnHover
          className="sm:h-24 md:h-44 justify-center overflow-hidden [--duration:30s] [--gap:1rem]"
        >
          {logos.map((data, idx) => (
            <img
              key={idx}
              src={data.img}
              alt={data.name}
              style={{ aspectRatio: "16/9" }}
              className="mx-auto md:h-36  md:w-64  h-20 w-32 cursor-pointer rounded-xl  transition-all duration-300 hover hover:shadow-white shadow-md"
            />
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          reverse
          className=" sm:h-24 md:h-40 justify-center overflow-hidden [--duration:30s] [--gap:1rem]"
        >
          {logos.map((data, idx) => (
            <img
              key={idx}
              src={data.img}
              alt={data.name}
              style={{ aspectRatio: "16/9" }}
              className="mx-auto md:h-36  md:w-64  h-20 w-32 cursor-pointer rounded-xl  transition-all duration-300 hover hover:shadow-white shadow-md"
            />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </>
  );
}
