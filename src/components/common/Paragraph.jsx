import React from 'react'


const Paragraph = ({
  children,
  className = '',
  ghost,
  center,
  ...props
}) => {
  const paratype = {
    center:'text-center mx-auto',
    default:'text-left',
  }
  return (
    <h2
      {...props}
      className={`${className}  ${ghost ? paratype.ghost : center ? paratype.center : paratype.default}  !leading-160 font-normal text-sm sm:text-base`}>
      {children}
    </h2>
  )
}

export default Paragraph
