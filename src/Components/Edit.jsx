import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const Edit = ({ visible, onClose }) => {
  
  const editwindow = (e) => {
    if(e.target.id === 'edit') onClose()
  }
  if(!visible) return null;


  return (
    <div  id='edit' onClick={editwindow} className='absolute top-0 bg-[#00000033] w-full h-[100vh]'>
      <div className='relative top-[10%] left-[30%] bg-white w-[454px] h-[572px] rounded-[10px] shadow-2xl '>
        <XMarkIcon onClick={onClose} className='absolute right-[12px] top-[20px] w-5 text-[#777777]' />
        <div className='px-[15px] py-[14px]'>
          <h1 className='pt-[4px] font-roboto font-[700] text-[18px] text-[#000000] '>Edit Note</h1>
        </div><hr />
        <div className='px-[15px]'>
          <form>
            <div className='py-[15px]'>
              <label className=' font-roboto font-[700] ' htmlFor="Title">Title</label>
              <input className='block border border-[#DEDFEC] w-full h-[46px] rounded-[10px] pl-[16px] placeholder:font-roboto placeholder:font-[400] placeholder:text-[14px] placeholder:text-[#777777] ' type="text" placeholder='Learn a new programming Language' />
            </div>
            <div>
              <p>Tag</p>
              <div className='border border-[#DEDFEC] h-[46px] w-full my-[5px] rounded-[10px] '>
                <div className='flex space-x-2 items-center mx-[7px]'>
                  <span className='flex space-x-2 items-center mt-[5px] px-[14px] py-[7px] bg-[#356DFB1A] rounded-[10px] '>
                    <p className=' font-roboto font-[400] text-[14px] text-[#606C8A] '>personal</p>
                    <XMarkIcon className=' w-4 text-[#356DFB] ' />
                  </span>
                  <span className='flex space-x-2 items-center mt-[5px] px-[14px] py-[7px] bg-[#356DFB1A] rounded-[10px] '>
                    <p className=' font-roboto font-[400] text-[14px] text-[#606C8A] '>Self</p>
                    <XMarkIcon className=' w-4 text-[#356DFB] ' />
                  </span>
                </div>
              </div>
            </div>
            <div className='my-[10px]'>
              <label htmlFor="Note">Note</label>
              <textarea className='block border border-[#DEDFEC] w-full my-[5px] px-[10px] py-[7px] rounded-[10px] placeholder:font-lato placeholder:font-[400] placeholder:text-[13px] placeholder:text-[#777777]    ' name="Note" id="Note" cols="30" rows="7" placeholder='Incididunt et aliquip sint duis esse. Est duis ea dolor eiusmod ut elit incididunt irure nisi duis aliquip anim velit. Officia laborum ectetur quis ea pariatur proident exercitation. '></textarea>
            </div>
            <div className='flex space-x-3 mt-[27px]'>
              <button className='bg-[#356DFB] rounded-[30px] px-[40px] py-[6px] font-roboto font-[400] text-[16px] text-[#FFFFFF] '>Edit</button>
              <button className='border border-[#DDDDDD] rounded-[30px] px-[30px] py-[6px] font-roboto font-[400] text-[16px]  text-[#777777B0] '>Cancel</button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Edit;