import React from 'react'
import CommonHeading from './common/Heading'
import Paragraph from './common/Paragraph'
import CommonButton from './common/CommonButton'

const Newsletter = () => {
  return (
    <div className='-mt-[164px]'>
      <div className=' conatiner mx-auto max-w-[1180px] px-5'>
        <div className='w-full bg-news bg-full bg-center bg-no-repeat rounded bg-light-blue py-[54px] translate-y-[164px] '>
            <CommonHeading center className='mb-4'>Join Our <span className='font-bold'>Newsletter</span></CommonHeading>
            <Paragraph center className='text-deep-blue text-opacity-90 max-w-[620px] mb-[38px]'>Stay up to date with the latest deals, energy-saving tips, and exclusive offers! Sign up for our newsletter and never miss out on great savings opportunities again.d</Paragraph>
            <div className='max-w-[476px] w-full gap-4 bg-light-white mx-auto p-[9px] rounded-[0px_100px_100px_50px] border flex justify-between border-solid border-black border-opacity-10'>
                <input type="text" className='w-full pl-[13px] py-1 border-0 focus:outline-none text-base text-deep-blue placeholder:text-deep-blue placeholder:text-opacity-50 !leading-110 placeholder:!leading-110 ' placeholder='Enter your email' />
                <CommonButton className='!bg-crisp-blue'>Submit</CommonButton>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Newsletter
