import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Delete = ({visible, onClose }) => {

  const deletewindow = (e) => {
    if(e.target.id === "delete") onClose()
  }

  if(!visible) return null;               
  





  return (
    <div id='delete' onClick={deletewindow} className='absolute top-0 bg-[#00000033] h-[100vh] w-full'>
      <div className='relative top-[39%] left-[35%] bg-white h-[225px] w-[340px] rounded-[7px] shadow-2xl '>
        <XMarkIcon className='absolute right-[7px] top-[7px] w-5' onClick={onClose}  />
        <ExclamationTriangleIcon className='absolute top-[20%] left-[43%] w-12 text-[#F13843] ' />
        <p className='pt-[92px] font-roboto font-[400] text-[14px] text-[#444444] leading-[161.3%] pl-[45px] '>Are you sure you want to delete this note?</p>
        <div className='flex space-x-3 items-center mt-[45px] mx-[46px] '>
          <button onClick={onClose} className='border-[1.2px] border-solid borde-[#C4C4C4] text-[#777777CF] px-[30px] py-[6px] font-roboto font-[400] text-[16px] rounded-[30px] '>Cancel</button>
          <button className='border-[1.2px] bg-[#F1384333] text-[#F13843] px-[30px] py-[6px] font-roboto font-[400] text-[16px] rounded-[30px] '>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Delete;