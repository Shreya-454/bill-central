import Image from 'next/image'
import React from 'react'
import Paragraph from './common/Paragraph'
import Link from 'next/link'
import Icons from './common/Icons'
import { FOOTER_LINK_LIST, SOCIAL_ICONS_LIST } from '@/utils/helper'

const Footer = () => {
  return (
    <div className='bg-foot bg-cover bg-center bg-no-repeat pt-[232px]'>
      <div className="container max-w-[1180px] mx-auto px-5 pb-14">
<div className="flex flex-row flex-wrap -mx-3">
<div className="sm:w-1/2 max-sm:mb-8 w-full px-3">
<Link href="/">
  <Image src="/assets/images/svg/footer-logo.svg" alt='footer-logo' width={223} height={84.95} className='mb-7'/>
  </Link>
<Paragraph className='text-white text-opacity-90 sm:max-w-[297px] mb-9'>Ut auctor nisi mauris eu tincidunt facilisi. Diam amet sollicitudin pretium maecenas ornare lacus arcu adipiscing. </Paragraph>
<p className='sm:text-xl text-lg text-white font-bold !leading-115 mb-4'>Follow Us</p>
<div className="flex gap-4">
  {
    SOCIAL_ICONS_LIST.map((item,index)=>(
<Link href={item.url} key={index}>
<div className='size-[33.5px] rounded-full border-[0.84px] border-off-white flex justify-center items-center'>
<Icons icon={item.icon}/>
</div>
</Link>
    ))
  }

</div>
</div>
<div className='sm:w-1/2 w-full px-3 flex sm:justify-end'>
<div className="md:max-w-[312px] w-full flex gap-10 md:justify-between sm:justify-end justify-between">
  {
    FOOTER_LINK_LIST.map ((link,i)=>(
      <ul key={i} className='text-white'>
        <li className='sm:text-xl text-lg !leading-150 font-bold mb-3'>{link.title}</li>
        {
          (link.path).map ((path,i) => (
            <Link key={i} href={path.url}>
              <li className={`sm:text-base text-sm text-opacity-90 !leading-115 font-normal ${i === link.path.length - 1 ? "mb-0":"mb-3.5"}` }>{path.link}</li>
            </Link>
          ))
        }
      </ul>
    ))
  }
</div>
</div>
</div>
      </div>
    </div>
  )
}

export default Footer
