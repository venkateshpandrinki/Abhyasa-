'use client'
import React, { useState, useEffect } from 'react';

const testimonials = [
  { name: "Rajesh", description: "The Abhyasa courses have transformed my understanding of VLSI. The trainers are very supportive!" },
  { name: "Narendra", description: "An amazing platform for VLSI training. The blend of online and offline classes is perfect." },
  { name: "Shekar", description: "I learned so much from Abhyasa's in-depth courses. Highly recommend it for aspiring engineers!" }
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change testimonial every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=' flex justify-center items-center flex-col border border-zinc-500 rounded-3xl  pt-4'>
        <h1 className=' text-white text-xl'> Testimonial</h1>
    <div className="w-[250px] h-[170px] relative overflow-hidden rounded-lg">
      {testimonials.map((testimonial, index) => (
        <div
        key={index}
        className={`absolute top-0 left-0 w-full h-full p-4 transition-transform duration-500 ease-in-out
            ${index === current ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
            style={{
                backgroundColor: 'inherit', // Inherit background color from parent
                color: 'white',
                opacity: index === current ? 1 : 0
            }}
            >
          <p className="text-lg font-semibold shadow-lg">{testimonial.name}</p>
          <p className="text-sm mt-2 text-gray-300 shadow-sm">{testimonial.description}</p>
        </div>
      ))}
    </div>
      </div>
  );
};

export default TestimonialCarousel;
