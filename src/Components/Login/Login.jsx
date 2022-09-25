import { XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { google, or } from '../../Components'
import {Link} from 'react-router-dom'



const Login = ( { visible , onClose } ) => {

  




  const LoginWindow = (e) => {
    if(e.target.id === 'Login') onClose()
  }

  if(!visible) return null;


  


  return (
    <div id='Login' onClick={LoginWindow} className='absolute top-0 bg-[#00000033] w-full h-[100vh] '>
    <div className='relative left-[35%] top-[13%] bg-[#ffffff] w-[365px] h-[540px] rounded-[10px] shadow-2xl '>
      <div className=' mx-[15px] '>
        <XMarkIcon  className='absolute right-[20px] top-[15px] w-5'  onClick={onClose}/>
        <h1 className='font-grupo font-[400] text-[35px]  leading-[35px] text-center pt-[37px] '>3Sixty</h1>
        <h2 className='pt-[20px] font-roboto font-[500] text-[20px] leading-[23px] text-[#356DFB] '>Create <br /> your account</h2>
        <p className=' font-roboto font-[400] text-[13px] leading-[15px] py-[10px] '>Enter your personal details to start your journey today</p>
        <div>
          <a href="##">
            <button className='border flex space-x-1 items-center my-[10px] px-[50px] py-[9px] text-center  border-[#356DFB] w-full rounded-[10px]'>
              <img src={google} alt="/"  className='ml-[20px]'/>
              <p className='pl-[10px] font-roboto font-[400] text-[16px] leading-[19px] text-[#356DFB]'>Sign in with Google</p>
            </button>
          </a>
          <img src={or} alt="/" className='absolute left-[30%] my-[10px]' />
        </div>
        <div className='mt-[40px]'>
          <form>
            <div>
              <input 
                type="email" 
                placeholder='E-mail'
                className=' border border-[#DEDFEC] mt-[15px] w-full py-[10px] pl-[17px] rounded-[10px] placeholder:font-roboto placeholder:font-[400] placeholder:text-[14px] placeholder:leading-[16px]  ' 
              />
            </div>
            <div>
              <input 
                type="Password" 
                name="Password" 
                placeholder='Password' 
                className=' border border-[#DEDFEC] mt-[15px] w-full py-[10px] pl-[17px] rounded-[10px] placeholder:font-roboto placeholder:font-[400] placeholder:text-[14px] placeholder:leading-[16px]  ' 
              />
            </div>
            <Link to="/Dashboard">
            <div>
              <button type='submit' className=' w-full bg-[#356DFB] mt-[15px] py-[10px] rounded-[30px] text-[#FFFFFF] cursor-pointer '>Sign In</button>
            </div>
            </Link>
            <p className='pt-[26px] text-center font-roboto font-[400] text-[12px] leading-[14px] '>Don’t have an account? <span className='text-[#356DFB]'>Sign up here</span> </p>
            
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login;