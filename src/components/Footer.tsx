import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

import { Mail, Phone, MapPinned, LucideYoutube } from "lucide-react";
import Link from "next/link";
import TestimonialCarousel from "./testimonails";
import { Separator } from "./ui/separator";
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-4 px-6 text-sm">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center ">
              <Link href="/" className="  my-2">
                {/* <ExportedImage
          src={"/images/smallLogo.png"}
          alt="logo"
          width={70}
          height={70}
          /> */}
                <Logo className="w-[70px] h-[70px]" />
              </Link>
              <Link href="/" className="  text-center">
                <p className="font-serif text-4xl  text-red-500 tracking-wide">
                  ABHYASA
                </p>
                <p className=" text-[14px]  font-medium text-blue-500">
                  SEMICON TECHNOLOGIES
                </p>
              </Link>
            </div>
            <p className="text-gray-300  mb-4 pl-4 max-w-s">
              Mastering VLSI Design for a Smarter Tomorrow
            </p>
          </div>
          <TestimonialCarousel />

          <div className="  flex flex-col md:flex-row  gap-10   justify-center items-start  ">
            <div className=" pt-4 md:pt-0 lg:pl-8 ">
              <h2 className="text-sm font-semibold mb-4">Contact Us</h2>{" "}
              {/* Changed from h3 to h2 */}
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
              <Link
                href="https://maps.app.goo.gl/x6nM2T9mB74tkHcb8"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex  gap-2 text-gray-400 hover:text-white underline "
              >
                Maps <MapPinned size={20} />
              </Link>
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className=" mt-12 flex items-center   md:flex-row md:pl-4 justify-between  ">
          <div className="flex items-center  gap-4 text-gray-300  ">
            <Link
              href="https://www.linkedin.com/in/abhyasasemitech24/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInLogoIcon className="hover:text-white transition-colors h-5 w-5" />
            </Link>
            <Link
              href="https://www.instagram.com/abhyasa_semitech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogoIcon className="hover:text-white transition-colors h-5 w-5 " />
            </Link>
            <Link
              href="https://x.com/abhyasasemitech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterLogoIcon className="hover:text-white transition-colors h-5 w-5" />
            </Link>
            <Link
              href={"https://www.youtube.com/@abhyasa_semitech"}
              target="_blank"
              aria-label="Youtube"
            >
              <LucideYoutube className="h-6 w-6" strokeWidth={1} />
            </Link>
          </div>
        </div>
        <div className=" text-center   text-gray-400 text-sm lg:pr-8  mt-3 ">
          <Separator />
          <p className=" mt-3">
            {" "}
            Copyright © 2025 ABHYASA SEMICON TECHNOLOGIES.
          </p>
          <p>
            {" "}
            Developed by{" "}
            <Link
              href="https://github.com/venkateshpandrinki"
              target="_blank"
              className=" underline"
            >
              Venkatesh
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
