import { XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'

const CreateNote = ({visible, onClose }) => {


  const handleCloseWindow = (e)  => {
    if(e.target.id === 'create') onClose()
  }

  if(!visible) return null;



  return (
    <div id='create' onClick={handleCloseWindow} className='absolute top-0 bg-[#00000033] h-[100vh] w-full '>
      <div className='relative top-[10%] left-[35%] w-[400px] h-[562px] bg-white shadow-2xl rounded-[10px] '>
        <div className='px-[20px] py-[7px]'>
          <h1 className=' font-roboto font-[700] text-[18px] text-[#000000] pt-[10px] '>Write a Note</h1>
          <XMarkIcon onClick={onClose} className='absolute right-[20px] top-[20px] w-5 text-[#777777]'/>
        </div><hr />
        <div>
          <form>
            <div className='px-[20px] py-[12px]'>
              <label htmlFor="Title" className='  font-roboto font-[700] text-[14px] text-[#000000]  '>Title</label>
              <input type="text" placeholder='note title' className=' block border border-[#DEDFEC] w-full h-[42px] rounded-[10px]  pl-[7px] placeholder:font-roboto placeholder:font-[400] placeholder:text-[14px] placeholder:text-[#CCCCCC] ' />
            </div>
            <div className='px-[20px] py-[12px]'>
              <label htmlFor="Title" className='  font-roboto font-[700] text-[14px] text-[#000000]  '>Tag</label>
              <input type="text" placeholder='note tag' className=' block border border-[#DEDFEC] w-full h-[42px] rounded-[10px]  pl-[7px] placeholder:font-roboto placeholder:font-[400] placeholder:text-[14px] placeholder:text-[#CCCCCC] ' />
            </div>
            <div className='px-[20px] py-[12px]'>
              <label htmlFor="Note">Note</label>
              <textarea name="Note" id="Note" cols="30" rows="7" placeholder='note body' className='block border pl-[7px] pt-[10px] border-[#DEDFEC] w-full rounded-[10px] placeholder:font-roboto placeholder:font-[400] placeholder:text-[14px]'></textarea>
            </div>
            <button className='mx-[20px] mt-[27px] px-[32px] py-[8px] rounded-[30px] text-[#FFFFFF] bg-[#356DFB]'>Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateNote