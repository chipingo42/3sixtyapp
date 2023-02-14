import { ArchiveBoxIcon, PencilIcon, PrinterIcon, TrashIcon } from '@heroicons/react/24/outline'
import React from 'react'


const Popup2 = ({visible, onClose , onClick, onclickEdit }) => {


  if(!visible) return null;



  return (
    <>
      <div onClick={onClose} className='absolute top-[170px] right-[94px] shadow-1xl rounded-[7px] bg-white h-[160px] w-[200px]'>
        <div onClick={onclickEdit} className='flex space-x-4 px-[20px] py-[10px] group hover:bg-[#356DFB12] '>
          <PencilIcon className='w-5  group-hover:text-[#356DFB]' />
          <p className='text-[#CCCCCC] font-roboto font-[400] text-[13px] group-hover:text-[#356DFB]'>Edit</p>
        </div>
        <div  onClick={onClick} className='flex space-x-4 px-[20px] py-[10px] group hover:bg-[#356DFB12] '>
          <TrashIcon className='w-5  group-hover:text-[#356DFB]' />
          <p className='text-[#CCCCCC] font-roboto font-[400] text-[13px] group-hover:text-[#356DFB]'>Delete</p>
        </div>
        <div   className='flex space-x-4 px-[20px] py-[10px] group hover:bg-[#356DFB12] '>
          <PrinterIcon className='w-5  group-hover:text-[#356DFB]' />
          <p className='text-[#CCCCCC] font-roboto font-[400] text-[13px] group-hover:text-[#356DFB]'>Print</p>
        </div>
        <div className='flex space-x-4 px-[20px] py-[10px] group hover:bg-[#356DFB12] '>
          <ArchiveBoxIcon className='w-5  group-hover:text-[#356DFB]' />
          <p className='text-[#CCCCCC] font-roboto font-[400] text-[13px] group-hover:text-[#356DFB]'>Archive</p>
        </div>
      </div>

    </>
  )
}

export default Popup2