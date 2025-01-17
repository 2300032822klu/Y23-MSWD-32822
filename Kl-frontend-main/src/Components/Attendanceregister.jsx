import React from "react"
import { useGSAP } from '@gsap/react';
import User from "./User";
import gsap from 'gsap';
const AttendanceRegister = () => {
    useGSAP(() => {
        gsap.from(".headding", {
          opacity: 0,
          
          duration: 1,
         
        });
        
      });
      return (
        <div className='w-full h-full bg-white  '>
          <h1 className='headding text-center text-red-500 font-bold font-[oswald] text-4xl  mt-6 tracking-wide'>Attendance Register</h1>
        <User />
        </div>
      )
}

export default AttendanceRegister