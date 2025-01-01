import { BENEFITS_LIST } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'
import CommonButton from './common/CommonButton'

const SwitchingEnergy = () => {
  return (
    <div className='lg:py-[162px] md:py-24 sm:py-16 py-10'>
      <div className="container max-w-[1180px] mx-auto px-5">
<div className="flex flex-row flex-wrap items-center -mx-3">
  <div className='lg:w-1/2 w-full px-3 flex max-lg:justify-center  max-lg:mb-10 max-md:mb-8 max-sm:mb-6'>
    <Image src="/assets/images/webp/energy-img.webp" alt='energy-img' width={507} height={451} className='max-w-[507px] max-h-[451px] w-full'/>
  </div>
  <div className='lg:w-1/2 w-full flex lg:justify-end justify-center px-3'  >
<div className='lg:max-w-[558px] max-w-[670px] w-full'>
  <h2 className='sm:text-4xl text-3xl md:text-5xl text-deep-blue font-normal lg:max-w-[409px] max-lg:text-center max-lg:mx-auto !leading-110 mb-4'><span className='font-bold'>Switching Energy</span> Made Simple</h2>
  <p className=' text-sm sm:text-base text-deep-blue text-opacity-90 mb-5 sm:mb-[38px] max-lg:text-center font-normal !leading-150'>Say goodbye to confusing energy plans! We simplify the process by providing clear and competitive electricity and gas recommendations. Whether you're moving or just seeking a better deal, our platform connects you with the best energy providers quickly and easily, helping you save on energy bills.</p>
  <h3 className='md:text-2xl sm:text-xl text-lg text-purssian-blue max-lg:text-center !leading-110 font-normal sm:mb-5 mb-3 md:mb-7'>Benefits of Comparing Energy Plans</h3>
  <div className='flex max-lg:justify-center'>
    <ul className=' list-disc flex flex-col gap-1 sm:gap-2 sm:pl-6 pl-10 sm:mb-8 mb-6 md:mb-[42px]'>
      {
        BENEFITS_LIST.map((list,index)=>(
          <li key={index} className='sm:text-base text-sm text-deep-blue font-normal !leading-150'>{list}</li>
        ))
      }
    </ul>
  </div>
  <div className='flex max-lg:justify-center'>
    <CommonButton className='bg-sky-blue'>Compare With Us</CommonButton>
  </div>
</div>
  </div>
</div>
      </div>
    </div>
  )
}

export default SwitchingEnergy
