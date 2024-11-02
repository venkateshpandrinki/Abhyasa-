
'use client'
import Logo from "@/app/fonts/logo";
import Link from "next/link";
import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import { GeistSans } from 'geist/font/sans';
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Image from 'next/image';

const Navbar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);

  return (
    <div className={`${GeistSans.className} w-full`}>
      <header className="flex h-16 w-full shrink-0 items-center px-4 md:px-6">
        <Link href="/">
          <Image
          src={"/images/smallLogo.png"}
          alt="logo"
          width={60}
          height={60}
          />
        </Link>
        <Link href="/">
          <p className="font-serif text-4xl text-red-500">Abhyasa</p>
        </Link>

        <nav className="ml-auto hidden lg:flex gap-8">
          <Link href="/" className="text-base text-white hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="text-base text-white hover:text-white transition-colors">About</Link>
          <Link href="/courses" className="text-base text-white hover:text-white transition-colors">Courses</Link>
          <Link href="/blog" className="text-base text-white hover:text-white transition-colors">Blog</Link>
          <Link href="/placements" className="text-base text-white hover:text-white transition-colors">Placements</Link>
          <Link href="/contact" className="text-base text-white hover:text-white transition-colors">Contact Us</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden ml-auto">
          <Menu size={32} onClick={() => setMenu(true)} />
        </div>
      </header>

      <Separator />

      {/* Mobile Sidebar Menu */}
      <div
        className={clsx(
          "fixed h-screen w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all z-50",
          isSideMenuOpen && "translate-x-0"
        )}
        onClick={() => setMenu(false)}
      >
        <section className="bg-black text-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-40 w-1/2 flex">
          <div className="flex justify-end">
            <X onClick={() => setMenu(false)} />
          </div>

          <Link href="/" className="text-base text-white transition-colors" onClick={() => setMenu(false)}>Home</Link>
          <Link href="/about" className="text-base text-white transition-colors" onClick={() => setMenu(false)}>About</Link>
          <Link href="/courses" className="text-base text-white transition-colors" onClick={() => setMenu(false)}>Courses</Link>
          <Link href="/blog" className="text-base text-white transition-colors" onClick={() => setMenu(false)}>Blog</Link>
          <Link href="/placements" className="text-base text-white transition-colors" onClick={() => setMenu(false)}>Placements</Link>
          <Link href="/contact" className="text-base text-white transition-colors" onClick={() => setMenu(false)}>Contact Us</Link>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
