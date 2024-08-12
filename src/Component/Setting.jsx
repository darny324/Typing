import React, { useState } from 'react'
import { getSetting, saveSetting } from '../assets';

const Setting = () => {
  const [isSave, setIsSave] = useState(false);
  const [setting, setSetting] = useState(getSetting());

  return (
    <div>
      <h1 className='text-3xl text-center my-4'>Settings</h1>
      <div>
        <div className='text-xl'>
          <span className='font-semibold'>Font Size:</span> 
          <select value={setting.fontSize} onChange={(e) => {
            setSetting({...setting, fontSize: e.target.value});
          }} className='border text-lg border-gray-500 rounded-md focus:outline-none ml-4'>
            <option>12</option>
            <option>16</option>
            <option>20</option>
            <option>24</option>
            <option>28</option>
          </select>
        </div>

        <div className='text-xl mt-8'>
          <span className='font-semibold'>Theme:</span> 
          <select value={setting.theme} onChange={e => {
            setSetting({...setting, theme: e.target.value});
            

            
          }} className='border text-lg border-gray-500 rounded-md focus:outline-none ml-4'>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>

        <div className='text-xl mt-8'>
          <span className='font-semibold'>Typing Level:</span> 
          <select value={setting.level} onChange={e => {
            setSetting({...setting, level: e.target.value});
          }} className='border text-lg border-gray-500 rounded-md focus:outline-none ml-4'>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <button onClick={() => {
          saveSetting(setting);
          setIsSave(true);
            setTimeout(() => {
              setIsSave(false);
            }, 3000);
        }} className='mt-8 text-xl px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600'>
          Save
        </button>
      </div>

      {
        isSave ? 
        <p>Saving Complete</p> 
        : <></>
      }
      
    </div>
  )
}

export default Setting