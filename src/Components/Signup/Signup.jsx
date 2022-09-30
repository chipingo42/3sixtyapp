import React, { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { google, or } from '../../Components'
import { useNavigate } from 'react-router-dom'




const Signup = ( { visible , onClose } ) => {

  const navigate = useNavigate()

  const [intialValues, setIntialValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  

  const [errorMeg, setErrorMgs] = useState('')

  
  const handleOnChange = (e) => {
    setIntialValues({...intialValues, [e.target.name]: e.target.value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!intialValues.name || !intialValues.username || !intialValues.email || !intialValues.password ) return setErrorMgs('field is required...')
    setErrorMgs('')
    navigate('/Dashboard')
  }

 
  
  

  const signupWindow = (e) => {
    if(e.target.id === 'signup') onClose()
  }

  if(!visible) return null;


  


  return (
    <div id='signup' onClick={signupWindow} className='absolute top-0 bg-[#00000033] w-full h-full py-[40px] overflow-y-scroll '>
      <div className='relative left-[35%] top-[-10px] bg-[#ffffff] w-[365px] py-[7px] rounded-[10px] shadow-2xl '>
        <div className=' mx-[15px] '>
          <XMarkIcon  className='absolute right-[20px] top-[15px] w-5'  onClick={onClose}/>
          <h1 className='font-grupo font-[400] text-[35px]  leading-[35px] text-center pt-[37px] '>3Sixty</h1>
          <h2 className='pt-[20px] font-roboto font-[500] text-[20px] leading-[23px] text-[#356DFB] '>Create <br /> your account</h2>
          <p className=' font-roboto font-[400] text-[13px] leading-[15px] py-[10px] '>Enter your personal details to start your journey today</p>
          <div>
            <a href="##">
              <button className='border flex space-x-1 items-center my-[10px] px-[50px] py-[9px] text-center  border-[#356DFB] w-full rounded-[10px]'>
                <img src={google} alt="/"  className='ml-[20px]'/>
                <p className='pl-[10px] font-roboto font-[400] text-[16px] leading-[19px] text-[#356DFB]'>Sign up with Google</p>
              </button>
            </a>
            <img src={or} alt="/" className='absolute left-[30%] my-[10px]' />
          </div>
          <form className='mt-[40px]'  onSubmit={handleSubmit} >
            <div>
              <input 
                type="name"
                name='name'
                placeholder='name' 
                className=' border border-[#DEDFEC] mt-[15px] w-full py-[10px] pl-[17px] rounded-[10px] placeholder:font-roboto placeholder:font-[400] placeholder:text-[14px] placeholder:leading-[16px]  ' 
                onChange={handleOnChange}
                value={intialValues.name}
              />
              <p className=' font-lato font-[200] text-[12px] text-red-700 '>{errorMeg}</p>
            </div>
            <div>
              <input 
                type="username" 
                name='username' 
                placeholder='Username' 
                className=' border border-[#DEDFEC] mt-[15px] w-full py-[10px] pl-[17px] rounded-[10px] placeholder:font-roboto placeholder:font-[400] placeholder:text-[14px] placeholder:leading-[16px]  ' 
                onChange={handleOnChange}
                value={intialValues.username}
              />
              <p className=' font-lato font-[200] text-[12px] text-red-700 '>{errorMeg}</p>
            </div>
            <div>
              <input  
                type="email"
                name='email'
                placeholder='E-mail' 
                className=' border border-[#DEDFEC] mt-[15px] w-full py-[10px] pl-[17px] rounded-[10px] placeholder:font-roboto placeholder:font-[400] placeholder:text-[14px] placeholder:leading-[16px]  ' 
                onChange={handleOnChange}
                value={intialValues.email}
              />
              <p className=' font-lato font-[200] text-[12px] text-red-700 '>{errorMeg}</p>
            </div>
            <div>
              <input  
                type="password"
                name='password'
                placeholder='Password' 
                className=' border border-[#DEDFEC] mt-[15px] w-full py-[10px] pl-[17px] rounded-[10px] placeholder:font-roboto placeholder:font-[400] placeholder:text-[14px] placeholder:leading-[16px]  ' 
                onChange={handleOnChange}
                value={intialValues.password}
              />
              <p className=' font-lato font-[200] text-[12px] text-red-700 '>{errorMeg}</p>
            </div>
            <div>
              <button 
               className=' w-full bg-[#356DFB] mt-[15px] py-[10px] rounded-[30px] text-[#FFFFFF] cursor-pointer '
               type='submit'
               value='submit'
              >Sign Up</button>
              
            </div>
            <p className='py-[20px] text-center font-roboto font-[400] text-[12px] leading-[14px] '>Already have an account? <span className='text-[#356DFB]'>Sign in here</span> </p>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Signup;

