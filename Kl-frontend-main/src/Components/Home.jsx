import React from "react"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
function Home() {

  useGSAP(() => {
    gsap.from(".headding", {
      opacity: 0,
      
      duration: 1,
     
    });
    
  });
  return (
    <div className='w-full h-full bg-white flex justify-center  '>
      <h1 className='headding text-center text-red-500 font-bold font-[oswald] text-4xl  mt-6 tracking-wide'>Home</h1>
    </div>
  )
}

export default Home