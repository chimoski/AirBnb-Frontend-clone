import Image from "next/dist/client/image"
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import '../styles/Home.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import {useState} from 'react'
import { Navigation, Pagination } from "swiper";

export const MediumCard = ({img, title}) => {
 
  return (
   <>
          <div className=" cursor-pointer hover:scale-105  transform  transition duration-200  ease-out">
          <div className="relative h-80 w-80 ">
          <Image src={img}
         layout="fill"
         className="rounded-xl"
         alt="image"
          /> 

          </div>
        <h3>{title}</h3>
          </div>
          
   
   </>
  )
}
