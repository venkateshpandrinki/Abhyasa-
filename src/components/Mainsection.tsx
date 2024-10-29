'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Heroslide from './Heroslide';


const images = [
  '/images/bgimg.jpg',
  '/images/processor-8785387_1920.jpg',
  
];

const Mainsection = () => {

    
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setKey(prevKey => prevKey + 1);  // This will force the animation to restart
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <div className="relative   h-[80vh] md:h-screen overflow-hidden   mx-1   ">
      
    <Head>
      <title>Image Carousel</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {images.map((image, index) => (
        <div
        key={`${image}-${key}`}
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
        }`}
        >
        <div
          className="w-full h-full bg-cover bg-center animate-slowzoom opacity-40"
          style={{ backgroundImage: `url(${image})` }}
          />
      </div>
    ))}

    <div className="absolute inset-0 flex flex-col items-center justify-center">

      <Heroslide/>


    
    </div>
 
  </div>
    </>
  )
}

export default Mainsection
