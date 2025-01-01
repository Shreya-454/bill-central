import React from 'react'
import CommonHeading from './common/Heading'
import Paragraph from './common/Paragraph'
import CommonButton from './common/CommonButton'

const Newsletter = () => {
  return (
    <div className='md:-mt-[164px] sm:-mt-[150px] -mt-[116px]'>
      <div className=' conatiner mx-auto max-w-[1180px] px-5'>
        <div className='w-full bg-news bg-full bg-center bg-no-repeat rounded bg-light-blue py-6 sm:py-10 md:py-[54px] px-5 md:translate-y-[164px] sm:translate-y-[150px] translate-y-[116px]'>
            <CommonHeading center className='sm:mb-4 mb-2'>Join Our <span className='font-bold'>Newsletter</span></CommonHeading>
            <Paragraph center className='text-deep-blue text-opacity-90 max-w-[620px] mb-4 sm:mb-6 md:mb-[38px]'>Stay up to date with the latest deals, energy-saving tips, and exclusive offers! Sign up for our newsletter and never miss out on great savings opportunities again.d</Paragraph>
            <div className='max-w-[476px] w-full gap-4 bg-light-white mx-auto p-1.5 sm:p-[9px] rounded-[0px_100px_100px_50px] border flex justify-between border-solid border-black border-opacity-10'>
                <input type="text" className='w-full sm:pl-[13px] py-1 border-0 focus:outline-none text-sm sm:text-base text-deep-blue placeholder:text-deep-blue placeholder:text-opacity-50 !leading-110 placeholder:!leading-110 ' placeholder='Enter your email' />
                <CommonButton color="group-hover:!stroke-crisp-blue" className='!bg-crisp-blue sm:max-w-[122px] max-w-[95px] w-full hover:!text-crisp-blue hover:!border-crisp-blue'>Submit</CommonButton>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Newsletter
