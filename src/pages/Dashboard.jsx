import { ArchiveBoxIcon, Cog6ToothIcon, EllipsisHorizontalIcon, MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';
import {TbNotes} from 'react-icons/tb'
import {BsListCheck, BsTrophy} from 'react-icons/bs'
import React from 'react'

const Dashboard = () => {
  return (
    <>
      <div className='bg-[#ffffff] w-full h-[68px]'>
        <div className='mx-[30px]'>
          <div className='flex  space-x-36'>
            <h1 className=' font-grupo font-[400] text-[36px] leading-[35px] pt-[14px] text-[#000000]'>3Sixty</h1>
            <form className='flex items-center mt-[10px]'>
              <MagnifyingGlassIcon  className='w-9 absolute ml-[5px] text-[#DDDDDD]'/>
              <input type="text" placeholder='Search notes' className='pl-[50px] py-[10px] px-[50px] text-[#777777] placeholder:font-roboto placeholder:font-[400] placeholder:text-[14px] placeholder:leading-[16px] '/>
            </form>
          </div>
        </div>
      </div>

      <div className='bg-[#F7FBFD] w-full h-[68px] border border-solid border-[#EEEEEE]'>
        <div className='mx-[30px]'>
          <div className='flex justify-between'>
            <div className='grid grid-cols-5 gap-[30px]'>
              <div className='inline-flex space-x-2 pt-[15px] group hover:border-b-2 hover:border-[#356DFB] pb-[16px] '>
                <TbNotes className=' group-hover:text-[#356DFB] w-[30px] h-[30px] mt-[4px]  text-[#C4C4C4]' />
                <h1 className='group-hover:text-[#356DFB] font-nunito font-[400] text-[15px] leading-[161.3%] pt-[7px] text-[#C4C4C4] '>Notes</h1>
                <span className='group-hover:text-[#356DFB] w-[25px] h-[25px] bg-[#DDDDDD] text-[#FFFFFF] rounded-[50%] mt-[6px] text-[12px] text-center pt-[4px] font-roboto font-[700] leading-14px  '>10</span>
              </div>
              <div className='inline-flex space-x-2 pt-[15px] group hover:border-b-2 hover:border-[#356DFB] pb-[16px] '>
                <BsListCheck className=' group-hover:text-[#356DFB] w-[30px] h-[30px] mt-[4px]  text-[#C4C4C4]' />
                <h1 className='group-hover:text-[#356DFB] font-nunito font-[400] text-[15px] leading-[161.3%] pt-[7px] text-[#C4C4C4] '>Todos</h1>
                <span className='group-hover:text-[#356DFB] w-[25px] h-[25px] bg-[#DDDDDD] text-[#FFFFFF] rounded-[50%] mt-[6px] text-[12px] text-center pt-[4px] font-roboto font-[700] leading-14px  '>10</span>
              </div>
              <div className='inline-flex space-x-2 pt-[15px] group hover:border-b-2 hover:border-[#356DFB] pb-[16px] '>
                <BsTrophy className=' group-hover:text-[#356DFB] w-[28px] h-[25px] mt-[9px]  text-[#C4C4C4]' />
                <h1 className='group-hover:text-[#356DFB] font-nunito font-[400] text-[15px] leading-[161.3%] pt-[7px] text-[#C4C4C4] '>Events</h1>
                <span className='group-hover:text-[#356DFB] w-[25px] h-[25px] bg-[#DDDDDD] text-[#FFFFFF] rounded-[50%] mt-[6px] text-[12px] text-center pt-[4px] font-roboto font-[700] leading-14px  '>10</span>
              </div>
              <div className='inline-flex space-x-2 pt-[15px] group hover:border-b-2 hover:border-[#356DFB] pb-[16px] '>
                <ArchiveBoxIcon className=' group-hover:text-[#356DFB] w-[25px] h-[25px] mt-[9px]  text-[#C4C4C4]' />
                <h1 className='group-hover:text-[#356DFB] font-nunito font-[400] text-[15px] leading-[161.3%] pt-[7px] text-[#C4C4C4] '>Archives</h1>
                <span className='group-hover:text-[#356DFB] w-[25px] h-[25px] bg-[#DDDDDD] text-[#FFFFFF] rounded-[50%] mt-[6px] text-[12px] text-center pt-[4px] font-roboto font-[700] leading-14px  '>10</span>
              </div>
              <div className='inline-flex space-x-2 pt-[15px] group hover:border-b-2 hover:border-[#356DFB] pb-[16px] '>
                <Cog6ToothIcon className=' group-hover:text-[#356DFB]w-[25px] h-[25px] mt-[9px]  text-[#C4C4C4]' />
                <h1 className='group-hover:text-[#356DFB] font-nunito font-[400] text-[15px] leading-[161.3%] pt-[10px] text-[#C4C4C4] '>Settings</h1>
              </div>
              
            </div>
            <div className='flex items-center'>
              <button className='bg-[#4C7DFA] shadow-1xl px-[20px] py-[9px] text-[#fff] rounded-l-[30px]  '>
               <PlusIcon  className='w-6'/>
              </button>
              <button className='bg-[#356DFB]  px-[13px] py-[9px] rounded-r-[30px] shadow-1xl text-[#fff]  '>Create Note</button>
            </div>
          </div>

        </div>
      </div>



      <div className='bg-[#F7FBFD] h-[80vh] w-full '>
        <div className='flex space-x-8'>
          <div className='bg-[#ffffff] h-[80vh] w-[350px] '>
            <div className='border-b border-solid border-[#EEEEEE] py-[17px]'>
              <div className='mx-[30px]'>
                <h1 className=' font-roboto font-[700] text-[17px] leading-[161.3%] text-[#444444] pt-[1px] '>10 Hours Fasting every week</h1>
                <p className='min-w-[294px] min-h-[84px] font-lato font-[400] text-[13px] leading-[161.3%] text-[#777777] pt-[4px]  '>Incididunt et aliquip sint duis esse. Est duis ea dolor eiusmod ut elit incididunt irure nisi duis aliquip anim velit. Officia laborum consectetur quis ea pariatur proident exercitation. </p>
                <div className='mt-[17px] flex items-center justify-between'>
                  <span className=' px-[27px] py-[7px] rounded-[30px] bg-[#356DFB0D] font-roboto font-[300] text-[13px] leading-[161.3%] text-[#356DFB] '>Personal</span>
                  <div className='flex space-x-5 '>
                    <p className='text-[#CCCCCC] pt-[5px] font-roboto font-[400] text-[13px] leading-[161.3%] '>23 hours ago</p>
                    <button className='bg-[#F7FBFD] px-[15px] py-[2px] rounded-[30px] border-[1.2px] border-solid border-[#EEEEEE]'>
                      <EllipsisHorizontalIcon  className='w-5'/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>helll</div>
          <div>helll</div>
        </div>

      </div>






    </>
  )
}

export default Dashboard;