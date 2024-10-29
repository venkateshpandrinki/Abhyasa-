import Logo from "@/app/fonts/logo";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

import { Mail, Phone, MapPinned } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 text-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center ">
              <Logo />{" "}
              <span className=" text-3xl font-serif font-medium">
                {" "}
                Abhyasa{" "}
              </span>
            </div>
            <p className="text-gray-300  mb-4 pl-4 max-w-s">
              Mastering VLSI Design for a Smarter Tomorrow
            </p>
          </div>
          <div className="  flex flex-col md:flex-row  gap-10   justify-center items-start  ">
            <div className=" lg:pl-8 ">
              <h3 className="text-sm font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2   text-center">
                <li className=" flex cursor-pointer items-center gap-2">
                  <Phone size={20} />
                  <p className=" text-gray-400 hover:text-white transition-colors">
                    +91 9438062982
                  </p>{" "}
                </li>
                <li className=" flex items-center gap-2">
                  <Mail size={20} />{" "}
                  <address>
                    <a
                      href="mailto:abhyasasemitech@gmail.com"
                      className=" text-gray-400 hover:text-white transition-colors"
                    >
                      abhyasasemitech@gmail.com
                    </a>
                  </address>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4 ">Address</h3>

              <p className=" text-gray-400  hover:text-white transition-colors">
                2nd Floor, Akhila Arcade Rama Talkies <br /> Road Asilmetta
                junction Visakhapatnam-530016 <br /> Andhra Pradesh India
              </p> 
              < Link href='https://maps.app.goo.gl/x6nM2T9mB74tkHcb8' target="_blank" rel="noopener noreferrer" className=" flex  gap-2 text-gray-400 hover:text-white underline ">Maps <MapPinned size={20}/></Link>
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className=" mt-12 flex items-center   md:flex-row md:pl-4 justify-between  ">
            <div className="flex flex-col md:flex-row gap-4 text-gray-300  ">
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedInLogoIcon className="hover:text-white transition-colors h-5 w-5"    />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramLogoIcon className="hover:text-white transition-colors h-5 w-5 " />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterLogoIcon className="hover:text-white transition-colors h-5 w-5" />
            </Link>
            </div>
          <span className=" text-center md:text-right text-gray-400 text-sm lg:pr-8">
            Copyright © 2024 Abhyasa Semicon Technologies.
          </span>
        </div>
      </div>
    </footer>
  );
}
