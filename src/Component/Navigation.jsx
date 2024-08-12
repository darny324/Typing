import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Navigation = () => {

  return (
    <div className='w-full flex justify-start bg-gray-700 text-white text-xl m-auto'>
      
        <NavLink className={({isActive, isPending}) => isActive ? 'active-link' : 'nav-link'} to='/'>
          Home
        </NavLink>
        <NavLink className={({isActive, isPending}) => isActive ? 'active-link' : 'nav-link'} 
        to='/paragraphs'>Paragraphs</NavLink>

        <NavLink className={({isActive, isPending}) => isActive ? 'active-link' : 'nav-link'} 
        to='/typing/0'>Typing</NavLink>

        <NavLink className={({isActive, isPending}) => isActive ? 'active-link' : 'nav-link'} 
        to='/types'>Typing Types</NavLink>

        <NavLink className={({isActive, isPending}) => isActive ? 'active-link' : 'nav-link'} 
        to='/settings'>Settings</NavLink>
    </div>
  )
}

export default Navigation