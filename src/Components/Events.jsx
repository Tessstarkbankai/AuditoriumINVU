'use client'
import React from 'react'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import banner1 from '../../Assets/banner1.jpeg'
import banner2 from '../../Assets/banner2.jpeg'
import banner3 from '../../Assets/banner3.jpeg'




// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Cards from '../Components/Cards'

function Events() {
  return (
    <div className=' px-4 py-4 mx-2 my-2'>
    <div>
       <Swiper navigation={true} modules={[Navigation]} className="mySwiper shadow-2xl w-[96%] mt-11">
        <SwiperSlide><Image className=' w-full h-[400px]' src={banner1}/></SwiperSlide>
        <SwiperSlide><Image className=' w-full h-[400px]' src={banner2}/></SwiperSlide>
        <SwiperSlide><Image className=' w-full h-[400px]' src={banner3}/></SwiperSlide>
      </Swiper>
    </div>
    <div>
      <Cards/>
    </div>
    </div>
  )
}

export default Events