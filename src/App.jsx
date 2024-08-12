import { useState } from 'react'
import './App.css'
import SpeedTyping from './SpeedTyping'
import { Outlet } from 'react-router-dom'
import Navigation from './Component/Navigation'

function App() {

  return (
    <div className='w-4/6 m-auto'>
      
      <Navigation/>
      <Outlet/>
    </div>
  )
}

export default App
