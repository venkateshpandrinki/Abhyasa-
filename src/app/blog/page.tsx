import Blog from '@/components/Blog'
import Navbar from '@/components/Navbar'
import { FC } from 'react'
import { Metadata } from 'next'
export const metadata:Metadata ={
 title:'VLSI Training & Career Blog – Chip Design, Tools, and Placement Insights',
 description:'Explore career guidance, tool tutorials, and placement tips in VLSI through Abhyasa’s blog. A go-to resource for aspiring chip designers from Hyderabad, Vizag, Vijayawada & Bangalore.'
}


const page: FC = ({}) => {
  return <div className=' bg-gradient-to-br from-black via-gray-900 to-gray-800'>
    <Navbar/>
    <Blog/>

  </div>
}

export default page