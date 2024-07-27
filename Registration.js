import React from 'react'
import {useNavigate} from 'react-router-dom'

function Registration() {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate('/login')
  }
  return (
    <div id='reg'>
      <div>
       <h1 className='hdng'>REGISTER TO CONTINUE</h1>
      </div>
      <form className='register'>
      <h2 className='reghding'>Welcome User!</h2>
        <div className='inputdiv'>
        <label className='label'>First Name</label>
          <br />
          <input className='inptfld' type="text" name="firstName" placeholder='first Name' required/>
        </div>
        <div className='inputdiv'>
          <label className='label'>Last Name</label>
          <br />
          <input className='inptfld' type="text" name="lastName" placeholder='last name' required/>
        </div>
        <div className='inputdiv'>
          <label className='label'>Email</label>
          <br />
          <input className='inptfld' type="email" name="email" placeholder='email' required />
        </div>
        <div className='inputdiv'>
          <label className='label'>Set a Password</label>
          <br />
          <input className='inptfld' type="password" name="password" placeholder='password' required />
        </div>
        <div className='inputdiv'>
          <label className='label'>Conform Password</label>
          <br />
          <input className='inptfld' type="password" name="password" placeholder='password' required />
        </div>
        <div>
        <br />
          <button className='signupbtn' onClick={handleClick}>REGISTER!</button>
        </div>
        
      </form>

    </div>
  )
}

export default Registration