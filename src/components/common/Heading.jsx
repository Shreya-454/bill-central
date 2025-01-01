import React from 'react'


const CommonHeading = ({
  children,
  className = '',
  ghost,
  center,
  ...props
}) => {
  const headingtype = {
    center:'text-center',
    default:'text-left',
  }
  return (
    <h2
      {...props}
      className={`${className}  ${ghost ? headingtype.ghost : center ? headingtype.center : headingtype.default}  text-deep-blue !leading-110 font-normal sm:text-4xl text-3xl md:text-5xl `}>
      {children}
    </h2>
  )
}

export default CommonHeading
