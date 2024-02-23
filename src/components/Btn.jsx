import React from 'react'

function Btn({btnName, width}) {
  return (
    <>
      <button className={`capitalize bg-[#1B88F4] rounded-lg text-white px-5 py-2 w-[${width}] transform transition-transform hover:bg-[#1b9df4] hover:scale-105`} >{btnName}</button>
    </>
  )
}

export default Btn
