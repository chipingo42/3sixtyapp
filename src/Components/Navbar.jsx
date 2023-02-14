import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Signup, Login }  from '.'


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
          <Link to="/">
            <h1 className='font-grupo font-[400] text-[36px] pt-[15px] leading-[35px] '>3Sixty</h1>
          </Link>
          <div className='mt-[19px]'>
            <button className='bg-[#507EF5] px-[17px] py-[8px] rounded-l-[30px] font-roboto font-[400] text-[14px] text-[#FFFFFF] text-center ' onClick={handleLogin}>Login</button>
            <button className='bg-[#356DFB] px-[17px] py-[8px] rounded-r-[30px]  font-roboto font-[400] text-[14px] text-[#FFFFFF] text-center ' onClick={handleSingnUp}>Sign Up</button>
          </div>
        </div>
      </div>
      <Signup visible={SignUp} onClose={handleSignUpClose} />
      <Login visible={logIn}  onClose={handleLoginClose} />
    </div>
  )
}

export default Navbar;


