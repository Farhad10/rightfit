"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Button from "./Button";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mb-4"
      >
        <SwiperSlide>
        <div className="relative">
        <Image width={1000} height={500} src="/images/shopslider.jpg" alt="Your Image" className="w-full" />

  <div className="absolute inset-0 bg-black opacity-60"></div>
</div>
        <div className=" absolute top-[25%] text-center w-full text-white  p-4 rounded-xl">
       <div className="lg:text-7xl font-thin m-10">Go To Product Page</div>
{/* <div className="my-6 text-2xl">Streaming Now</div> */}
<Link
                href="/products">
<Button text="Shop Now" />
</Link>
             </div>
              
             </SwiperSlide>
             <SwiperSlide>
        <div className="relative">
        <Image width={1000} height={500} src="/images/shopslider2.jpg" alt="Your Image" className="w-full" />

  <div className="absolute inset-0 bg-black opacity-60"></div>
</div>
        <div className=" absolute top-[25%] text-center w-full text-white  p-4 rounded-xl">
       <div className="lg:text-7xl m-10">Buy Now From Products</div>
{/* <div className="my-6 text-2xl">40% Off On Chair</div> */}
<Link
                href="/products">
<Button text="Shop Now" />
</Link>
             </div>
              
             </SwiperSlide>
             <SwiperSlide>
        <div className="relative">
        <Image width={1000} height={500} src="/images/shopslider3.jpg" alt="Your Image" className="w-full" />

  <div className="absolute inset-0 bg-black opacity-60"></div>
</div>
        <div className=" absolute top-[25%] text-center w-full text-white  p-4 rounded-xl">
       <div className="lg:text-7xl m-10">Go Shop</div>
{/* <div className="my-6 text-2xl">25% Off On Chair</div> */}
<Link
                href="/products">
<Button text="Shop Now" />
</Link>
             </div>
              
             </SwiperSlide>
      </Swiper>
    </>
  );
}
