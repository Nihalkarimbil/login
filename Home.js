import React from 'react'
import image from "./pexels-prateekkatyal-2740956.jpg"

const Home = () => {
  return (
    <div className='home'>
      <div className='hmdiv'>
        <h1 className='homhdng'>Welcome To Home Page</h1>
        <div >
          <img id='img' src={image}/>
        </div>
      </div>
      
    </div>
  )
}

export default Home