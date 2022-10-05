import { ArchiveBoxIcon, Cog6ToothIcon, EllipsisHorizontalIcon, MagnifyingGlassIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import {TbNotes} from 'react-icons/tb'
import {BsListCheck, BsTrophy} from 'react-icons/bs'
import React, { useState } from 'react'
import {Popup1, Popup2, CreateNote, Delete, Edit } from '../../Components'

const Dashboard = () => {

  const [popup1, setPopup1] = useState(false)
  const [popup2, setPopoup2] = useState(false)
  const [createNote, setCreateNote] = useState(false)
  const [deleteNote, setDeleteNote] = useState(false)
  const [editNote, setEditNote] = useState(false)




  const handlePop1 = () => setPopup1(true)
  const handlePopup2 = () => setPopoup2(true)
  const handleCreate = () => setCreateNote(true)
  const handleDelete = () => setDeleteNote(true)
  const handleEdit = () => setEditNote(true)

  
  const handlePop1Close = () => setPopup1(false)
  const handlePop2Close = () => setPopoup2(false)
  const handleCreateClose = () => setCreateNote(false)
  const handleDeleteClose = () => setDeleteNote(false)
  const handleEditClose = () => setEditNote(false)



  return (
    <>
      <div className='bg-[#ffffff] w-full h-[68px]'>   
        <div className='mx-[30px]'>
          <div className='flex  space-x-36'>
            <h1 className='font-grupo font-[400] text-[36px] leading-[35px] pt-[14px] text-[#000000]'>3Sixty</h1>
            <form className='flex items-center mt-[10px]'>
              <label htmlFor="search">
                <MagnifyingGlassIcon  className='w-9 absolute top-4 ml-[5px] text-[#DDDDDD]'/>
              </label>
              <input id='search' type="text" placeholder='Search notes' className='pl-[50px] py-[10px] px-[50px] text-[#777777] placeholder:font-roboto placeholder:font-[400] placeholder:text-[14px] placeholder:leading-[16px] '/>
            </form>
          </div>
        </div>
      </div>


      <div className='bg-[#F7FBFD] w-full h-[69px] border border-solid border-[#EEEEEE]'>
        <div className='mx-[30px]'>
          <div className='flex  justify-between'>
            <div className='grid grid-cols-5 gap-[25px]'>
              <div className='inline-flex space-x-2 mt-[15px] h-0 group hover:border-b-[3px]  hover:border-[#356DFB] pb-[50px] '>
                <TbNotes className=' group-hover:text-[#356DFB] w-[30px] h-[32px] mt-[4px]  text-[#C4C4C4]' />
                <h1 className='group-hover:text-[#356DFB] font-nunito font-[400] text-[15px] leading-[161.3%] pt-[7px] text-[#C4C4C4] '>Notes</h1>
                <span className='group-hover:text-[#356DFB] w-[25px] h-[25px] bg-[#DDDDDD] text-[#FFFFFF] rounded-[50%] mt-[6px] text-[12px] text-center pt-[4px] font-roboto font-[700] leading-14px  '>10</span>
              </div>
              <div className='inline-flex space-x-2 mt-[15px] h-0 group hover:border-b-[3px]  hover:border-[#356DFB] pb-[50px] '>
                <BsListCheck className=' group-hover:text-[#356DFB] w-[31px] h-[35px] mt-[4px]  text-[#C4C4C4]' />
                <h1 className='group-hover:text-[#356DFB] font-nunito font-[400] text-[15px] leading-[161.3%] pt-[9px] text-[#C4C4C4] '>Todos</h1>
                <span className='group-hover:text-[#356DFB] w-[25px] h-[25px] bg-[#DDDDDD] text-[#FFFFFF] rounded-[50%] mt-[6px] text-[12px] text-center pt-[4px] font-roboto font-[700] leading-14px  '>10</span>
              </div>
              <div className='inline-flex space-x-2 mt-[15px] h-0 group hover:border-b-[3px]  hover:border-[#356DFB] pb-[50px]  '>
                <BsTrophy className=' group-hover:text-[#356DFB] w-[28px] h-[20px] mt-[9px]  text-[#C4C4C4]' />
                <h1 className='group-hover:text-[#356DFB] font-nunito font-[400] text-[15px] leading-[161.3%] pt-[7px] text-[#C4C4C4] '>Events</h1>
                <span className='group-hover:text-[#356DFB] w-[25px] h-[25px] bg-[#DDDDDD] text-[#FFFFFF] rounded-[50%] mt-[6px] text-[12px] text-center pt-[4px] font-roboto font-[700] leading-14px  '>10</span>
              </div>
              <div className='inline-flex space-x-2 mt-[15px] h-0 group hover:border-b-[3px]  hover:border-[#356DFB] pb-[50px] '>
                <ArchiveBoxIcon className=' group-hover:text-[#356DFB] w-[25px] h-[23px] mt-[9px]  text-[#C4C4C4]' />
                <h1 className='group-hover:text-[#356DFB] font-nunito font-[400] text-[15px] leading-[161.3%] pt-[7px] text-[#C4C4C4] '>Archives</h1>
                <span className='group-hover:text-[#356DFB] w-[25px] h-[25px] bg-[#DDDDDD] text-[#FFFFFF] rounded-[50%] mt-[6px] text-[12px] text-center pt-[4px] font-roboto font-[700] leading-14px  '>10</span>
              </div>
              <div className='inline-flex space-x-2 mt-[15px] h-0 group hover:border-b-[3px]  hover:border-[#356DFB] pb-[50px]  '>
                <Cog6ToothIcon className=' group-hover:text-[#356DFB] w-[25px] h-[25px] mt-[9px]  text-[#C4C4C4]' />
                <h1 className='group-hover:text-[#356DFB] font-nunito font-[400] text-[15px] leading-[161.3%] pt-[10px] text-[#C4C4C4] '>Settings</h1>
              </div>
            </div>
            <div className='h-0 mt-[35px] flex items-center'>
              <button className=' bg-[#4C7DFA] px-[15px] py-[10px] rounded-l-[30px] text-[#ffffff]'>
                <PlusIcon className=' w-5' />
              </button>
              <button  className='bg-[#356DFB] px-[12px] py-[8px] rounded-r-[30px] font-roboto font-[400] text-[16px] text-[#ffffff]' onClick={handleCreate} >Create Note</button>
            </div>
          </div>
        </div>
      </div>




      <div className='bg-[#F7FBFD] h-[80vh] w-full '>
        <div className='flex space-x-4'>
          <div className='bg-[#ffffff] h-[80vh] w-[350px] '>
            <div className='h-[520px] overflow-y-scroll whitespace-normal'>
              <div className='hover:bg-[#F7FBFD] border-b border-solid border-[#EEEEEE] py-[17px]'>
                <div className='mx-[30px]'>
                  <h1 className=' font-roboto font-[700] text-[17px] leading-[161.3%] text-[#444444] pt-[1px] '>10 Hours Fasting every week</h1>
                  <p className='min-w-[294px] min-h-[84px] font-lato font-[400] text-[13px] leading-[161.3%] text-[#777777] pt-[4px]  '>Incididunt et aliquip sint duis esse. Est duis ea dolor eiusmod ut elit incididunt irure nisi duis aliquip anim velit. Officia laborum consectetur quis ea pariatur proident exercitation. </p>
                  <div className='mt-[17px] flex items-center justify-between'>
                    <span className=' px-[27px] py-[7px] rounded-[30px] bg-[#356DFB0D] font-roboto font-[300] text-[13px] leading-[161.3%] text-[#356DFB] '>Personal</span>
                    <div className='flex space-x-5 '>
                      <p className='text-[#CCCCCC] pt-[5px] font-roboto font-[400] text-[13px] leading-[161.3%] '>23 hours ago</p>
                      <button className='bg-[#F7FBFD] px-[15px] py-[2px] rounded-[30px] border-[1.2px] border-solid border-[#EEEEEE]'>
                        <EllipsisHorizontalIcon  className='w-5 text-[#777777]' onClick={handlePop1}/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='hover:bg-[#F7FBFD] border-b border-solid border-[#EEEEEE] py-[17px]'>
                <div className='mx-[30px]'>
                  <h1 className=' font-roboto font-[700] text-[17px] leading-[161.3%] text-[#444444] pt-[1px] '>Visit Plateau State</h1>
                  <p className='min-w-[294px] min-h-[84px] font-lato font-[400] text-[13px] leading-[161.3%] text-[#777777] pt-[4px]  '>Incididunt et aliquip sint duis esse. Est duis ea dolor eiusmod ut elit incididunt irure nisi duis aliquip anim velit. Officia laborum consectetur quis ea pariatur proident exercitation. </p>
                  <div className='mt-[17px] flex items-center justify-between'>
                    <span className=' px-[27px] py-[7px] rounded-[30px] bg-[#356DFB0D] font-roboto font-[300] text-[13px] leading-[161.3%] text-[#356DFB] '>Personal</span>
                    <div className='flex space-x-5 '>
                      <p className='text-[#CCCCCC] pt-[5px] font-roboto font-[400] text-[13px] leading-[161.3%] '>23 hours ago</p>
                      <button className='bg-[#F7FBFD] px-[15px] py-[2px] rounded-[30px] border-[1.2px] border-solid border-[#EEEEEE]'>
                        <EllipsisHorizontalIcon  className='w-5 text-[#777777]' onClick={handlePop1}/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='hover:bg-[#F7FBFD] border-b border-solid border-[#EEEEEE] py-[17px]'>
                <div className='mx-[30px]'>
                  <h1 className=' font-roboto font-[700] text-[17px] leading-[161.3%] text-[#444444] pt-[1px] '>Birthday debrief</h1>
                  <p className='min-w-[294px] min-h-[84px] font-lato font-[400] text-[13px] leading-[161.3%] text-[#777777] pt-[4px]  '>Incididunt et aliquip sint duis esse. Est duis ea dolor eiusmod ut elit incididunt irure nisi duis aliquip anim velit. Officia laborum consectetur quis ea pariatur proident exercitation. </p>
                  <div className='mt-[17px] flex items-center justify-between'>
                    <span className=' px-[27px] py-[7px] rounded-[30px] bg-[#356DFB0D] font-roboto font-[300] text-[13px] leading-[161.3%] text-[#356DFB] '>Personal</span>
                    <div className='flex space-x-5 '>
                      <p className='text-[#CCCCCC] pt-[5px] font-roboto font-[400] text-[13px] leading-[161.3%] '>23 hours ago</p>
                      <button className='bg-[#F7FBFD] px-[15px] py-[2px] rounded-[30px] border-[1.2px] border-solid border-[#EEEEEE]'>
                        <EllipsisHorizontalIcon  className='w-5 text-[#777777]' onClick={handlePop1}/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='hover:bg-[#F7FBFD] border-b border-solid border-[#EEEEEE] py-[17px]'>
                <div className='mx-[30px]'>
                  <h1 className=' font-roboto font-[700] text-[17px] leading-[161.3%] text-[#444444] pt-[1px] '>Learn Darts</h1>
                  <p className='min-w-[294px] min-h-[84px] font-lato font-[400] text-[13px] leading-[161.3%] text-[#777777] pt-[4px]  '>Incididunt et aliquip sint duis esse. Est duis ea dolor eiusmod ut elit incididunt irure nisi duis aliquip anim velit. Officia laborum consectetur quis ea pariatur proident exercitation. </p>
                  <div className='mt-[17px] flex items-center justify-between'>
                    <span className=' px-[27px] py-[7px] rounded-[30px] bg-[#356DFB0D] font-roboto font-[300] text-[13px] leading-[161.3%] text-[#356DFB] '>Personal</span>
                    <div className='flex space-x-5 '>
                      <p className='text-[#CCCCCC] pt-[5px] font-roboto font-[400] text-[13px] leading-[161.3%] '>23 hours ago</p>
                      <button className='bg-[#F7FBFD] px-[15px] py-[2px] rounded-[30px] border-[1.2px] border-solid border-[#EEEEEE]'>
                        <EllipsisHorizontalIcon  className='w-5 text-[#777777]' onClick={handlePop1}/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='hover:bg-[#F7FBFD] border-b border-solid border-[#EEEEEE] py-[17px]'>
                <div className='mx-[30px]'>
                  <h1 className=' font-roboto font-[700] text-[17px] leading-[161.3%] text-[#444444] pt-[1px] '>10 Hours Fasting every week</h1>
                  <p className='min-w-[294px] min-h-[84px] font-lato font-[400] text-[13px] leading-[161.3%] text-[#777777] pt-[4px]  '>Incididunt et aliquip sint duis esse. Est duis ea dolor eiusmod ut elit incididunt irure nisi duis aliquip anim velit. Officia laborum consectetur quis ea pariatur proident exercitation. </p>
                  <div className='mt-[17px] flex items-center justify-between'>
                    <span className=' px-[27px] py-[7px] rounded-[30px] bg-[#356DFB0D] font-roboto font-[300] text-[13px] leading-[161.3%] text-[#356DFB] '>Personal</span>
                    <div className='flex space-x-5 '>
                      <p className='text-[#CCCCCC] pt-[5px] font-roboto font-[400] text-[13px] leading-[161.3%] '>23 hours ago</p>
                      <button className='bg-[#F7FBFD] px-[15px] py-[2px] rounded-[30px] border-[1.2px] border-solid border-[#EEEEEE]'>
                        <EllipsisHorizontalIcon  className='w-5 text-[#777777]' onClick={handlePop1}/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='hover:bg-[#F7FBFD] border-b border-solid border-[#EEEEEE] py-[17px]'>
                <div className='mx-[30px]'>
                  <h1 className=' font-roboto font-[700] text-[17px] leading-[161.3%] text-[#444444] pt-[1px] '>10 Hours Fasting every week</h1>
                  <p className='min-w-[294px] min-h-[84px] font-lato font-[400] text-[13px] leading-[161.3%] text-[#777777] pt-[4px]  '>Incididunt et aliquip sint duis esse. Est duis ea dolor eiusmod ut elit incididunt irure nisi duis aliquip anim velit. Officia laborum consectetur quis ea pariatur proident exercitation. </p>
                  <div className='mt-[17px] flex items-center justify-between'>
                    <span className=' px-[27px] py-[7px] rounded-[30px] bg-[#356DFB0D] font-roboto font-[300] text-[13px] leading-[161.3%] text-[#356DFB] '>Personal</span>
                    <div className='flex space-x-5 '>
                      <p className='text-[#CCCCCC] pt-[5px] font-roboto font-[400] text-[13px] leading-[161.3%] '>23 hours ago</p>
                      <button className='bg-[#F7FBFD] px-[15px] py-[2px] rounded-[30px] border-[1.2px] border-solid border-[#EEEEEE]'>
                        <EllipsisHorizontalIcon  className='w-5 text-[#777777]' onClick={handlePop1}/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div  className='w-[100%] mt-[15px] rounded-[7px] bg-white h-[77vh]'>
            <h1  className='pt-[41px] font-roboto font-[500] text-[48px] text-[#000000] pl-[50px] '>Learn Darts</h1>
            <p className=' font-lato font-[400] text-[14px] text-[#777777] px-[40px] min-w-[400px] min-h-[182px] '>Exercitation in consectetur velit enim ullamco aliqua officia mollit eu nulla sunt aliquip aute nulla. Aliquip tempor et exercitation minim adipisicing minim velit. Id elit culpa aute est. Aute aute excepteur et adipisicing adipisicing officia dolor. Commodo incididunt ad labore incididunt aliquip deserunt anim eu incididunt est mollit. Proident aliqua non aliquip dolore sint voluptate adipisicing. Tempor in fugiat incididunt ea officia ullamco ut qui excepteur dolore ut et ut. Ut do laborum culpa consectetur duis et velit est nulla. In consectetur nisi duis ad quis magna anim ut dolor minim irure proident do irure. Sit do quis sunt consequat id incididunt quis.</p>
          </div>
          <div className='min-h-[300px] min-w-[88px]'>
            <button className='bg-white mt-[14px] h-[40px] w-[40px] rounded-[50%] shadow-1xl '>
              <EllipsisHorizontalIcon className='w-6 ml-[7px] text-[#777777] ' onClick={handlePopup2}/>
            </button>
            <div className='mt-[20px]'>
              <button className=' bg-white h-[46px] w-[42px] rounded-t-[30px] shadow-1xl'>
                <PlusIcon  className='w-5 ml-[10px] text-[#777777]'/>
              </button>
              <button className='relative top-[47px] left-[-42px] bg-white h-[46px] w-[42px]  rounded-b-[30px] shadow-1xl'>
                <MinusIcon  className='w-5 ml-[10px] text-[#777777]'/>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Popup1 visible={popup1} onClose={handlePop1Close} />
      <Popup2 visible={popup2} onClick={handleDelete} onclickEdit={handleEdit} onClose={handlePop2Close} />
      <CreateNote visible={createNote} onClose={handleCreateClose} />
      <Delete visible={deleteNote} onClose={handleDeleteClose} />
      <Edit visible={editNote} onClose={handleEditClose} />
    </>
  )
}

export default Dashboard;