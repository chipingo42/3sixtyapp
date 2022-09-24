import { ArchiveBoxIcon, PencilIcon, PrinterIcon, TrashIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Popup1 = ({visible, onClose }) => {

  if(!visible) return null;




  return (
    <div className='absolute top-[327px] bg-white left-[12%] rounded-[3px] shadow-1xl min-w-[143px] min-h-[124px] '>
      <div onClick={onClose} className='flex space-x-5 px-[10px] py-[6px] hover:bg-[#356DFB12] group'>
        <PencilIcon  className=' group-hover:text-[#356DFB] w-5 text-[#CCCCCC]'/>
        <p className='text-[#CCCCCC] group-hover:text-[#356DFB] font-roboto font-[400] text-[13px] '>Edit</p>
      </div>
      <div onClick={onClose} className='flex space-x-5 px-[10px] py-[6px] hover:bg-[#356DFB12] group'>
        <TrashIcon   className=' group-hover:text-[#356DFB] w-5 text-[#CCCCCC]'/>
        <p className='text-[#CCCCCC] group-hover:text-[#356DFB] font-roboto font-[400] text-[13px] '>Delete</p>
      </div>
      <div onClick={onClose} className='flex space-x-5 px-[10px] py-[6px] hover:bg-[#356DFB12] group'>
        <PrinterIcon   className=' group-hover:text-[#356DFB] w-5 text-[#CCCCCC]'/>
        <p className='text-[#CCCCCC] group-hover:text-[#356DFB] font-roboto font-[400] text-[13px] '>Print</p>
      </div>
      <div onClick={onClose} className='flex space-x-5 px-[10px] py-[6px] hover:bg-[#356DFB12] group'>
        <ArchiveBoxIcon   className=' group-hover:text-[#356DFB] w-5 text-[#CCCCCC]'/>
        <p className='text-[#CCCCCC] group-hover:text-[#356DFB] font-roboto font-[400] text-[13px] '>Archive</p>
      </div>
    </div>
  )
}

export default Popup1;