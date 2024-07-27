import React from 'react'
import {useNavigate} from "react-router-dom"


function Login() {
  
  const navi=useNavigate()
  const handlesign=()=>navi("/home")
  
  return (
    <div className='login'>
      <h1 className='loghdng'>Login to Continue!</h1>
      <form className='lgform'>
        <h3 className='lgfmhd'>Login to your Account..</h3>
        <label className='lglbl'>Enter the Mail ID: </label>
        <input className='lginpt' type="email" name="email" placeholder='Enter email' required />
        <label className='lglbl'>Enter your Password:</label>
        <input className='lginpt' type="password" name="password" placeholder='password' required />
        <br/>
        <button className='lgbtn' onClick={handlesign}>Sign IN</button>
        
      </form>
    </div>
  )
}

export default Login