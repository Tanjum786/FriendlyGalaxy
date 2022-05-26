import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BookMark, Explore, Homepage, Login, Profile, Signup } from '../Pages'

export const Routers = () => {
  return (
    <div>
        <Routes>
          <Route  path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/homepage' element={<Homepage/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/explore' element={<Explore/>}/>
          <Route path='/bookmark' element={<BookMark/>}/>
        </Routes>
        
    </div>
  )
}
