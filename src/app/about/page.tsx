import About from '@/components/About'
import React from 'react'
import { Metadata } from 'next'
export const metadata:Metadata ={
 title:'Abhyasa VLSI Institute – Empowering Future Chip Designers in South India',
 description:'Learn about Abhyasa, a leading VLSI training institute committed to shaping semiconductor careers across Telangana, Andhra Pradesh, and Bangalore. Hands-on, placement-focused, and industry-aligned.'
}

const page = () => {
  return (
    <>
      
      <About />
      

    </>
  )
}

export default page
