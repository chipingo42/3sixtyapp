import React, { useState } from 'react'
import { Signup, Login, dots, laptop, code, fitness }  from '../../Components'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline'


const Navbar = () => {

  const [SignUp, setSignup] = useState(false)
  const [logIn, setLogin] = useState(false)

  const handleSingnUp = () => setSignup(true);
  const handleLogin = () => setLogin(true)

  const handleSignUpClose = () => setSignup(false)
  const handleLoginClose = () => setLogin(false)



  return (
    <div className='bg-[#ffffff] h-full w-full '>
      <div className=' max-w-[1200px] mx-auto '>
        <div className='flex justify-between'>
          <h1 className='font-grupo font-[400] text-[36px] pt-[15px] leading-[35px] '>3Sixty</h1>
          <div className='mt-[19px]'>
            <button className='bg-[#507EF5] px-[17px] py-[8px] rounded-l-[30px] font-roboto font-[400] text-[14px] text-[#FFFFFF] text-center ' onClick={handleLogin}>Login</button>
            <button className='bg-[#356DFB] px-[17px] py-[8px] rounded-r-[30px]  font-roboto font-[400] text-[14px] text-[#FFFFFF] text-center ' onClick={handleSingnUp}>Sign Up</button>
          </div>
        </div>
      </div>

      <div className=' max-w-[1200px] mx-auto bg-[#ffffff]'>
        <div className='flex justify-between'>
          <div>
            <h1 className=' fon-san font-[600] pt-[34px] text-[48px] leading-[65px] text-[#000000] min-w-[238px] min-h-[325px]  '>You can’t really <br /> manage time, but you <br /> can take small steps <br /> that counts on a long <br /> run.</h1>
            <div className='mt-[41px]'>
              <div className='flex space-x-2 py-[4px]'>
                <ChevronDoubleRightIcon  className=' w-6 text-[#444444] '/>
                <p className='font-san  font-[400] text-[16px] leading-[22px] text-[#000000] '>Track your daily activities</p>
              </div>
              <div className='flex space-x-2 py-[4px]'>
                <ChevronDoubleRightIcon  className=' w-6 text-[#444444] '/>
                <p className='font-san  font-[400] text-[16px] leading-[22px] text-[#000000] '>Save important notes or code snippets you’re likely to reuse</p>
              </div>
              <div className='flex space-x-2 py-[4px]'>
                <ChevronDoubleRightIcon  className=' w-6 text-[#444444] '/>
                <p className='font-san  font-[400] text-[16px] leading-[22px] text-[#000000] '>keep a diary of your daily activities</p>
              </div>
            </div>
            <button className='font-san  font-[400] text-[16px] leading-[22px] bg-[#356DFB] px-[25px] py-[10px] text-[#E1E1EC] mt-[43px] rounded-[30px]'>Get Started</button>
          </div>

          <div className='flex justify-evenly relative mt-[29px] left-[-30px] h-[300px]'>
            <div className='self-end h-0 relative bottom-[30px] left-[80px]'>
              <img src={dots} alt="/" className=' w-[155px] h-[145px] ' />
              <div className='relative bottom-[117px] left-[30px] shadow-1xl w-[200px] h-[220px] rounded-[5px'>
                <img  src={code} alt="/" />
                <p className='font-san  font-[400] text-[12px] pt-[18px] leading-[19px] text-[#444444] text-center '>Jot down reusable code snippets</p>
              </div>
            </div>
            <div className='h-0  relative left-[40px]'>
              <img src={dots} alt="/" className=' w-[155px] h-[145px] ' />
              <div className='relative bottom-[117px] left-[30px] shadow-1xl bg-white w-[200px] h-[220px] rounded-[5px'>
                <img src={laptop} alt="/" />
                <p className='font-san  font-[400] text-[12px] pt-[18px] leading-[19px] text-[#444444] text-center '>track your TODOS statust</p>
              </div>
            </div>
            <div className='self-end  h-0 relative bottom-[30px] '>
              <img src={dots} alt="/" className='relative top-[130px] w-[155px] h-[145px] ' />
              <div className='relative bottom-[117px] left-[30px] bg-[#ffffff] shadow-1xl w-[200px] h-[220px] rounded-[5px'>
                <img src={fitness} alt="/" />
                <p className='font-san  font-[400] text-[12px] pt-[18px] leading-[19px] text-[#444444] text-center '>Jot down your daily activities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center font-san  font-[400] text-[11px] pt-[10px] leading-[15px] '>All Rights Reserved. 2020 @wiztemple</p>

      <Signup visible={SignUp} onClose={handleSignUpClose} />
      <Login visible={logIn}  onClose={handleLoginClose} />
    </div>
  )
}

export default Navbar;