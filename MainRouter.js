import React from 'react'
import Login from './Login'
import Home from './Home'
import Registration from './Registration'
import {Routes,Route} from "react-router-dom"
import "./page.css"


function MainRouter() {
  return (
    <div>
        <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/" element={<Registration />}/>
        </Routes>
    </div>
  )
}

export default MainRouter