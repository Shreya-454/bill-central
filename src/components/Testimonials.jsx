"use client"
import React from 'react'
import CommonHeading from './common/Heading'
import Paragraph from './common/Paragraph'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { TESTIMONIAL_LIST } from '@/utils/helper'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import Icons from './common/Icons'

const Testimonials = () => {
  return (
    <div id='testimonial' className='lg:pb-[162px] md:pb-24 sm:pb-16 pb-10'>
      <div className='container max-w-[1180px] mx-auto px-5 '>
        <CommonHeading center className='mb-4'>Our <span className='font-bold'>Testimonials</span></CommonHeading>
        <Paragraph center className='text-opacity-90 text-deep-blue max-w-[490px] md:mb-12 sm:mb-9 mb-6 lg:mb-[62px]'>Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum</Paragraph>
        <div className='relative'>
            <Swiper
             slidesPerView={1}
             spaceBetween={20}
             loop={true}
             autoplay={true}
             centeredSlides={true}
             navigation={{ nextEl: ".nextbtn", prevEl: ".prevbtn" }}
             modules={[Pagination, Navigation, Autoplay]}
             breakpoints={{
                1024:{
                    slidesPerView: 3,
                    spaceBetween: 20,
                    
                },      640:{
                    slidesPerView: 2,
                    spaceBetween: 20,
                }
          
             }}
             >
                {TESTIMONIAL_LIST.map((item,index)=> (
                <SwiperSlide key={index}>
                <div className='max-sm:max-w-[364px] mx-auto bg-white border border-black border-opacity-10 w-full shadow-utility-box rounded p-5'>
            <div className='flex gap-2 items-center mb-6'>
            <Image src={item.img} alt='slider-img' width={60} height={60} sizes='100vw' className='size-[60px] rounded-full '/>
            <div className='flex flex-col'>
            <p className='text-2xl !leading-150 font-normal text-black'>{item.profile}</p>
            <p className='text-base !leading-150 text-black text-opacity-50'>{item.user}</p>
            </div>
            </div>
            <Image src="/assets/images/svg/stars.svg" alt='stars' width={99.25} height={18} className='mb-[18px]'/>
            <Paragraph className='!leading-150 text-deep-blue text-opacity-90'>{item.content}</Paragraph>
            </div>
                </SwiperSlide>
                ))}
            </Swiper>
            <div className='flex w-full  gap-8 justify-center sm:justify-between max-xl:mt-6 max-sm:mt-4'>
                <div className='sm:size-10 size-8 xl:absolute top-[40%] active:bg-deep-blue group custom-xl:-left-[72px] -left-12 rounded-full flex justify-center items-center border prevbtn cursor-pointer border-deep-blue'>
                        <Icons icon="prev-arrow" className='group-active:fill-white'/>
                      </div>
                      <div className='sm:size-10 size-8 rounded-full flex justify-center active:bg-deep-blue group xl:absolute top-[40%] custom-xl:-right-[72px] -right-12 items-center border nextbtn cursor-pointer border-deep-blue'>
                        <Icons icon="next-arrow" className='group-active:fill-white'/>
                      </div>
            </div>
        </div>
     
      </div>
    </div>
  )
}

export default Testimonials
