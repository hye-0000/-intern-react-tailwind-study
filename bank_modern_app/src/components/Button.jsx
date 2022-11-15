import React from 'react'

//가능한 재활용 할 것
const Button = ({styles}) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary  outline-none ${styles} rounded-[10px]`}>Get started</button>
  )
}

export default Button