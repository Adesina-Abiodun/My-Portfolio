import React from 'react'

const Footer = () => {

  return (
    <div className="bg-purple-bold h-[50px] w-[100%] mt-[30px] flex justify-center items-center">
<p className="text-center text-[17px] text-white">copyright @ iBelieve  <span>{new Date().getFullYear()}</span></p>
    </div>
  )
}

export default Footer