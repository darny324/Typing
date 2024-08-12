import React, { useState } from 'react'
import { getTypingTypes, setTypingTypes } from '../assets';

const TypingTypes = () => {
  const [types, setTypes] = useState(getTypingTypes());
  setTypingTypes(types);
  return (
    <div className='w-full flex flex-col'>
      <h1 className='text-3xl font-bold text-center'>Choose A Type</h1>
      <div className={`mt-6 flex justify-center gap-32 `}>
        <button onClick={() => {
          setTypes('accuracy');
        }} className={`shadow-lg rounded-lg px-4 py-6 
        ${types === 'accuracy' ? 'bg-blue-600 text-white' : 'bg-white text-black'}`}>Accuracy Typing Test</button>
        <button onClick={() => {
          setTypes('speed');
        }} className={`shadow-lg rounded-lg px-4 py-6 
          ${types === 'speed' ? 'bg-blue-600 text-white' : 'bg-white text-black'}`}>Speed Typing Test</button>
      </div>
    </div>
  )
}

export default TypingTypes