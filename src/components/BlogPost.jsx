import Image from 'next/image'
import React from 'react'
import Icons from './common/Icons'
import { BLOG_POST_LIST } from '@/utils/helper'
import Link from 'next/link'

const BlogPost = () => {
  return (
    <div className='max-w-[1248px] container mx-auto px-10'>
      <h2 className='text-3xl font-semibold text-black mb-8'>All blog posts</h2>
      <div className="grid grid-cols-3 gap-8">
        {
          BLOG_POST_LIST.map((data, index) => (
            <Link key={index} href={`/blog/${data?data.title?.toLowerCase()?.replace(/ /g, '-'): '404'}`} className='h-[508px]'>
              <div className='p-6 rounded-lg border-2 border-[#EFEFEF] h-full'>
                <Image src={data.mainImg} alt='mediciences' width={320} height={240} sizes='100vw' className='mb-8 h-[240px]' />
                <p className=' text-sm font-semibold text-[#02428D] mb-3'>Category - {data.category}</p>
                <div className='flex justify-between items-center mb-3'>
                  <h3 className='text-2xl font-semibold'>{data.title}</h3>
                  <Icons icon="cardArrow" />
                </div>
                <p className=' text-base text-[#676767]'>{data.discription}</p>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default BlogPost
