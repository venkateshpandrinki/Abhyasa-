import Link from 'next/link'
import React from 'react'

const FloatingNav = () => {
  return (
    <div className='h-20 w-[850px] bg-blue-600  bg-opacity-100 font-bold text-xl top-20 right-40 absolute z-10 rounded-full hidden lg:flex justify-evenly items-center text-foreground dark:text-white'>
      {/* Home Link */}
      <div className='relative group '>
        <Link href='/' className='  inline-block mb-1' >
          Home
        </Link>
        <div className='absolute   left-0 bottom-0 w-full h-[4px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full'></div>
      </div>

      {/* About Link */}
      <div className='relative group'>
        <Link href='/about' className='  inline-block mb-1'>
          About
        </Link>
        <div className='absolute left-0 bottom-0 w-full h-[4px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full'></div>
      </div>

      {/* Courses Link */}
      <div className='relative group'>
        <Link href='/courses'className='  inline-block mb-1'>
          Courses
        </Link>
        <div className='absolute left-0 bottom-0 w-full h-[4px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full'></div>
      </div>

      {/* Blog Link */}
      <div className='relative group'>
        <Link href='/blog' className='  inline-block mb-1'>
          Blog
        </Link>
        <div className='absolute left-0 bottom-0 w-full h-[4px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full'></div>
      </div>

      {/* Contact Us Link */}
      <div className='relative group'>
        <Link href='/contact' className='  inline-block mb-1'>
          Contact us
        </Link>
        <div className='absolute left-0 bottom-0 w-full h-[4px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full'></div>
      </div>
      <div className='relative group'>
        <Link href='/placements' className='  inline-block mb-1'>
         Placements
        </Link>
        <div className='absolute left-0 bottom-0 w-full h-[4px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full'></div>
      </div>
    </div>
  )
}

export default FloatingNav
