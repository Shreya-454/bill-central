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
  ...props
}) => {
  const buttonType = {
    transparent:'border-2 border-rich-black text-rich-black hover:border-orange hover:text-orange',
    default:'bg-sky-blue text-white',
  }
  return url ? (
    <Link
      to={url}
      {...props}
      className={`${className} ${ghost ? buttonType.ghost : transparent ? buttonType.transparent : buttonType.default} rounded-[0_50px_50px_20px] items-center duration-300 px-5 py-3 !leading-115 text-base font-bold flex gap-[3px]`}>
      {children} 
      <span>
        <Icons icon="white-arrow" />
      </span>
    </Link>
  ) : (
    <button
      {...props}
      className={`${className} ${ghost ? buttonType.ghost : transparent ? buttonType.transparent : buttonType.default} rounded-[0_50px_50px_20px] items-center duration-300 px-5 py-3 !leading-115 text-base font-bold flex gap-[3px]`}>
      {children}
      <span>
        <Icons icon="white-arrow" />
      </span>
    </button>
  )
}

export default CommonButton