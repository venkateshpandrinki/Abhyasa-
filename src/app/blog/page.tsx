import Blog from '@/components/Blog'
import Navbar from '@/components/Navbar'
import { FC } from 'react'


const page: FC = ({}) => {
  return <div className=' bg-gradient-to-br from-black via-gray-900 to-gray-800'>
    <Navbar/>
    <Blog/>

  </div>
}

export default page