import React from 'react'
import CommonHeading from './common/Heading'
import Paragraph from './common/Paragraph'
import Icons from './common/Icons'
import { UTILITIES_DATA_LIST } from '@/utils/helper'

const Utilities = () => {
  return (
    <div className='lg:pb-[162px] md:pb-24 sm:pb-16 pb-10'>
      <div className="container max-w-[1180px] px-5 mx-auto">
<CommonHeading center className='mb-4'>Why Choose Us for <span className='font-bold'>Utilities</span></CommonHeading>
<Paragraph center className='text-deep-blue opacity-90 max-w-[620px] mb-4 sm:mb-10 md:mb-[58px]'>This emphasizes both the action and the benefits, drawing in potential customers with a clear value proposition. Let me know if you'd like any adjustments!</Paragraph>
<div className="flex max-lg:flex-col  xl:gap-6 gap-4">
    <div className='w-full bg-purssian-blue rounded p-6 sm:p-8 md:p-10 xl:max-w-[424px] lg:max-w-[400px] max-w-[600px] mx-auto'>
<img src="/assets/images/svg/review.svg" alt="review" width={277} height={278} className='md:mb-[30px] sm:mb-6 mb-4 lg:max-w-[277px] md:max-w-[250px] sm:max-w-[200px] max-w-[150px]' />
<h4 className='text-white text-xl sm:text-2xl !leading-110 font-normal sm:mb-3 mb-2'>Tailored Recommendations</h4>
<Paragraph className='text-white opacity-90 mb-3.5 sm:mb-[22px]'>Our platform analyzes your unique energy needs and preferences to suggest the best utility providers, ensuring you get the most personalized options available.</Paragraph>
<button className='bg-white py-3 px-6 rounded-full'><Icons icon="right-arrow"/></button>
    </div>
    <div className='grid sm:grid-cols-2 grid-cols-1 xl:gap-6 gap-4 w-full'>
        {
            UTILITIES_DATA_LIST.map((data,i)=>(
                <div key={i} className='bg-white sm:p-6 p-4 min-custom-lg:h-[286px] rounded border border-deep-blue  border-opacity-10 shadow-utility-box'>
<Icons icon={data.icon}  />
<h4 className='sm:mt-[18px] mt-3 text-xl sm:text-2xl !leading-110 text-off-black font-normal mb-2 sm:mb-3'>{data.title}</h4>
<Paragraph className='text-deep-blue text-opacity-90'>{data.content}</Paragraph>
</div>
            ))
        }
    </div>
    </div>
</div>
      </div>
  )
}

export default Utilities
