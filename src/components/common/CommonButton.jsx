import Link from 'next/link'
import React from 'react'
import Icons from './Icons'


const CommonButton = ({
  children,
  className = '',
  ghost,
  transparent,
  header,
  url,
  color,
  ...props
}) => {
  const buttonType = {
    transparent:'border-2 border-rich-black text-rich-black hover:border-orange hover:text-orange',
    default:'bg-sky-blue hover:text-sky-blue text-white',
  }
  return url ? (
    <Link
      to={url}
      {...props}
      className={`${className} ${ghost ? buttonType.ghost : transparent ? buttonType.transparent : buttonType.default} rounded-[0_50px_50px_40px] items-center duration-300 group sm:px-5 px-4 py-2 sm:py-3 !leading-115 text-sm sm:text-base font-bold flex gap-[3px] after:h-full relative after:absolute after:bg-white after:rounded-[0_50px_50px_20px] after:left-0 after:right-[100%] hover:after:right-0 overflow-hidden after:duration-300 after:-z-10 z-10 border-transparent hover:border-sky-blue border`}>
     {children} 
        <Icons icon="white-arrow" className={` group-hover:stroke-sky-blue duration-300`} />
    
    </Link>
  ) : (
    <button
      {...props}
      className={`${className} ${ghost ? buttonType.ghost : transparent ? buttonType.transparent : buttonType.default} rounded-[0_50px_50px_40px] items-center duration-300 group sm:px-5 px-4 py-2 sm:py-3 !leading-115 text-sm sm:text-base font-bold flex gap-[3px] after:h-full relative after:absolute after:bg-white after:rounded-[0_40px_40px_0px] after:left-0 after:right-[100%] hover:after:right-0 overflow-hidden after:duration-300 after:-z-10 z-10 border-transparent hover:border-sky-blue border`}>
{children} 
     
        <Icons icon="white-arrow" className={` ${color} group-hover:stroke-sky-blue duration-300 `} />
    
    </button>
  )
}

export default CommonButton