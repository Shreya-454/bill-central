import React from 'react'
import CommonHeading from './common/Heading'
import Paragraph from './common/Paragraph'
import Image from 'next/image'
import { SWITCH_LIST } from '@/utils/helper'

const Switch = () => {
  return (
    <div id='how' className='lg:pb-[162px] md:pb-24 sm:pb-16 pb-10'>
      <div className="conatiner max-w-[1440px] max-lg:px-5 mx-auto">
        <CommonHeading center className='mb-4'>Simple Steps to <span className='font-bold'>Switch</span></CommonHeading>
        <Paragraph center className='text-dark-grey text-opacity-90 max-w-[610px] mb-5 sm:mb-7 md:mb-10 lg:mb-[58px]'>Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum</Paragraph>
        <div className='sm:grid lg:grid-cols-4 sm:grid-cols-2 max-sm:flex justify-center flex-col items-center max-lg:gap-5 max-md:gap-4'>
          {
            SWITCH_LIST.map((data,i)=>(
              <div key={i} className='max-sm:max-w-[400px]'>
                <div className='relative z-10 group overflow-hidden max-lg:h-[600px] max-md:h-[500px]'>
                <Image src={data.img} alt='switch-img' width={360} height={661} className='w-full' />
                <div className='absolute inset-0 h-full group-hover:top-[-107%] duration-500 bg-light-blue w-full z-20 bg-opacity-95 flex justify-center p-8'>
                  <p className='vertical-text rotate-180 text-2xl lg:text-3xl xl:text-custom-3xl text-deep-blue !leading-110'>{data.title}</p>
                </div>
                <div className='bg-purssian-blue w-full p-8 absolute bottom-0 opacity-0 duration-500 group-hover:opacity-100 group-hover'>
                  <div className='flex items-start gap-2 pb-3.5'>
                    <p className='text-white text-custom-3xl leading-110'>{i+1}.</p>
                    <h4 className='text-white text-custom-3xl leading-110'>{data.subtitle}</h4>
                  </div>
                  <Paragraph className='text-white text-opacity-90 max-w-[286px]'>{data.discription}</Paragraph>
                </div>
                            </div>
              </div>
            ))
          }
       
        </div>
      </div>
    </div>
  )
}

export default Switch
