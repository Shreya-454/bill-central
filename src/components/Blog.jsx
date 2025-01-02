"use client"
import { BLOG_POST_LIST } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'
import Icons from './common/Icons'
import { usePathname } from 'next/navigation'
const Blog = () => {
    const path = usePathname();
  const detail = path.replace(/\/blog\//g, '');
  const filteredProduct = BLOG_POST_LIST?.filter(data =>
    data.title?.toLowerCase()?.replace(/ /g, '-') === detail
  );
  return (
      <div className='container max-w-[1248px] mx-auto '>
          {filteredProduct.map((data, i) => (
              <div key={i} className='flex flex-col items-center'>
                  <Image width={1248} height={516} className='max-w-[1248px] h-[516px] object-cover mx-auto rounded-tl-lg rounded-tr-lg' src={data.mainImg} alt='blog-img'  />
                  <div className='px-[87px]'>
                      <div className='pt-12 pb-6 flex items-center gap-3'>
                          <Icons icon="leftArrow"/>
                          <p className='font-semibold text-xl leading-110'>Blog</p>
                      </div>
                      <p className='font-semibold text-3xl leading-126 text-black pb-6'>{data.title}</p>
                      <p className='font-normal text-lg leading-155 text-light-grey pb-6 max-w-[1074px]'>{data.details}
                      </p>
                      <Image src={data.img} alt='img' width={1074} height={480} className='mb-6'/>
                      <div className='flex flex-col gap-6'>
                          {
                            data.para.map((obj,i)=>(
                                <p className='font-normal text-lg leading-155 text-light-grey  max-w-[1074px]'>
                            {obj}
                              </p>
                            ))
                          }
                      </div>
                  
                  </div>
              </div>
          ))}
    </div>
  )
}
export default Blog